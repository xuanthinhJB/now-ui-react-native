const formatter = new Intl.NumberFormat('vi-VN', {
  style: 'currency',
  currency: 'VND',
});

export const formatVnCurrency = (number) => {
  return formatter.format(number);
};
