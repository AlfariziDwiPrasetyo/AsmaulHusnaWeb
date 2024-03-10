"use server";
const getAsmaulHusna = async () => {
  try {
    const response = await fetch(`https://asmaul-husna-api.vercel.app/api/all`);
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export default getAsmaulHusna;
