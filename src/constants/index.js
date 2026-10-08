import {
  FaChartLine,
  FaBalanceScale,
  FaFlask,
  FaChalkboardTeacher,
  FaBriefcase,
  FaLaptopCode,
} from "react-icons/fa";
import {
  SiPython,
  SiOpenjdk,
  SiRedis,
  SiPandas,
  SiNumpy,
  SiPlotly,
  SiStreamlit,
  SiTradingview,
  SiJupyter,
  SiGit,
  SiDocker,
  SiBinance,
} from "react-icons/si";

import { marketMaking, hedging, backtest, education } from "../assets";

export const navLinks = [
  { id: "about", title: "About" },
  { id: "work", title: "Work" },
  { id: "skills", title: "Skills" },
  { id: "projects", title: "Projects" },
  { id: "contact", title: "Contact" },
];

const services = [
  { title: "Market Making", icon: FaChartLine },
  { title: "Inventory & Hedging", icon: FaBalanceScale },
  { title: "Research & Backtesting", icon: FaFlask },
  { title: "Quant Education", icon: FaChalkboardTeacher },
];

// level = category: Core (languages/infra), Data (analysis), Tools
const technologies = [
  { name: "Python", icon: SiPython, level: "Core" },
  { name: "Java", icon: SiOpenjdk, level: "Core" },
  { name: "Redis", icon: SiRedis, level: "Core" },
  { name: "CEX APIs", icon: SiBinance, level: "Core" },
  { name: "pandas", icon: SiPandas, level: "Data" },
  { name: "NumPy", icon: SiNumpy, level: "Data" },
  { name: "Plotly", icon: SiPlotly, level: "Data" },
  { name: "Streamlit", icon: SiStreamlit, level: "Data" },
  { name: "Jupyter", icon: SiJupyter, level: "Data" },
  { name: "Pine Script", icon: SiTradingview, level: "Tools" },
  { name: "MQL4/5", icon: FaLaptopCode, level: "Tools" },
  { name: "Git", icon: SiGit, level: "Tools" },
  { name: "Docker", icon: SiDocker, level: "Tools" },
];

const experiences = [
  {
    title: "Quantitative Trader",
    company_name: "The20",
    icon: FaBriefcase,
    iconBg: "#383E56",
    date: "2024 - Present",
    skills: ["Market Making", "Python", "Redis", "Risk"],
    points: [
      "Design and implement algorithmic trading strategies for crypto spot and futures markets.",
      "Develop and maintain market-making systems across CEXs (Binance, OKX, Bybit, BingX, ...).",
      "Build models for price discovery, optimal quoting, spread management and inventory risk control.",
      "Apply order-flow analysis and cross-exchange liquidity techniques.",
      "Refactored the market-making codebase into a pluggable strategy architecture with shared Redis, order and logging utilities.",
      "Train interns and the quant team; publish research on CryptoThreads.blog.",
    ],
  },
  {
    title: "Quantitative Trader (Freelance)",
    company_name: "Freelancer",
    icon: FaLaptopCode,
    iconBg: "#E6DEDD",
    date: "2024 - Present",
    skills: ["MQL", "Pine Script", "Backtesting"],
    points: [
      "Developed and deployed strategies on MT4/5 and TradingView (MQL, Pine Script).",
      "Backtested strategies for Sharpe-ratio optimization and drawdown reduction.",
      "Built a Python backtesting engine (mean-reversion, trend-following, breakout).",
    ],
  },
];

const tags = (a, b, c) => [
  { name: a, color: "blue-text-gradient" },
  { name: b, color: "green-text-gradient" },
  { name: c, color: "pink-text-gradient" },
];

const GITHUB = "https://github.com/minhtranc1991";

const projects = [
  {
    name: "Market-Making Engine",
    description:
      "Multi-threaded engine for CEX spot and perpetuals. Strategies share a common interface, Redis holds live state, and quoting supports fixed-spread, percentage and multi-level grid modes with refresh, cooldown and max-age controls.",
    tags: tags("python", "redis", "cex-api"),
    image: marketMaking,
    source_code_link: GITHUB,
  },
  {
    name: "Synthetic Base Hedging",
    description:
      "Inventory management with target ratios, skew tolerance and delta-neutral perpetual hedging; capital is split across arbitrage, active quoting and a synthetic base position.",
    tags: tags("hedging", "perps", "risk"),
    image: hedging,
    source_code_link: GITHUB,
  },
  {
    name: "Python Backtesting Engine",
    description:
      "Backtester for mean-reversion, trend-following and breakout strategies, evaluated on Sharpe ratio and drawdown.",
    tags: tags("python", "pandas", "plotly"),
    image: backtest,
    source_code_link: GITHUB,
  },
  {
    name: "Quant Trading Curriculum",
    description:
      "A 3-stage systematic-trading course (foundations, coding & backtesting, portfolio construction) plus a market-making training track for interns.",
    tags: tags("education", "quant", "curriculum"),
    image: education,
    source_code_link: GITHUB,
  },
];

export { services, technologies, experiences, projects };
