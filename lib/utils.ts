export function formatToTimeAgo(data: string): string {
  const DayInMs = 1000 * 60 * 60 * 24;
  const time = new Date(data).getTime();
  const now = new Date().getTime();
  const diff = Math.round((time - now) / DayInMs);

  const formatter = new Intl.RelativeTimeFormat("ko");

  return formatter.format(diff, "days");
}

export function formatToWon(price: number): string {
  return price.toLocaleString("ko-KR");
}
