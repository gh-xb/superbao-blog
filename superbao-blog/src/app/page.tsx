import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Brain, Network, Rocket, Users, Bot, Eye, Code, BarChart3, GraduationCap, Newspaper, Mail, MessageCircle, Github, Twitter, Linkedin, Sparkles, CheckCircle2 } from "lucide-react";
import Starfield from "@/components/Starfield";
import TiltCard from "@/components/TiltCard";
import wechatQR from "./wechat-qr.png";

export default function Home() {
  return (
    <>
      <Starfield />
      <main id="home" className="container-hero px-6 py-24 sm:py-28 scroll-mt-24">
        <section className="text-center">
          <div className="inline-block rounded-full bg-white/10 px-4 py-2 text-sm sm:text-base text-white/80">Available for projects</div>
          <h1 className="mt-6 text-6xl sm:text-8xl font-extrabold gradient-heading tracking-tight">Super Bao</h1>
+         <h2 className="mt-2 text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-400 dark:text-gray-100">用AI做有意思的事。</h2>
          <p className="mt-6 max-w-[680px] mx-auto text-lg sm:text-xl leading-8 text-white/80">
             结果很重要，但过程更重要，一个粗糙的开始胜过完美的计划。
           </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="#features">
              <Button className="btn-glow">了解更多</Button>
            </Link>
          </div>
        </section>

        <div className="pointer-events-none select-none relative">
          <div className="absolute right-[-40px] bottom-[-40px] size-28 rounded-full bg-purple-400/20 blur-md dark:bg-purple-400/30 dark:blur-2xl" />
          <div className="absolute left-[-20px] top-[-20px] size-20 rounded-full bg-pink-400/15 blur-sm dark:bg-pink-400/20 dark:blur-xl" />
        </div>
      </main>

      {/* 核心功能区域 */}
      <section id="features" className="container-hero px-6 py-24 scroll-mt-24">
      <div className="text-center mb-16">
      <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">项目</h2>
      <p className="text-lg text-white/70 max-w-2xl mx-auto">精选项目集，覆盖从入门到实战的完整路径</p>
      </div>
  
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {/* 新手入门项目 */}
      <TiltCard className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 transition-all hover:bg-white/10 hover:border-white/20">
        <div className="mb-4">
          <div className="inline-flex size-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-purple-600">
            <Brain className="size-6 text-white" />
          </div>
        </div>
        <h3 className="text-xl font-semibold text-white mb-3">新手入门</h3>
        <p className="text-sm text-white/70 leading-relaxed">零基础快速上手AI，从第一个模型到第一个小应用。</p>
      </TiltCard>
  
      {/* 知识图谱导航 */}
      <TiltCard className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 transition-all hover:bg-white/10 hover:border-white/20">
        <div className="mb-4">
          <div className="inline-flex size-12 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-pink-500">
            <Network className="size-6 text-white" />
          </div>
        </div>
        <h3 className="text-xl font-semibold text-white mb-3">进阶实践</h3>
        <p className="text-sm text-white/70 leading-relaxed">围绕真实业务场景的中型项目，深化算法与工程能力。</p>
      </TiltCard>
  
      {/* 实战项目驱动 */}
      <TiltCard className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 transition-all hover:bg-white/10 hover:border-white/20">
        <div className="mb-4">
          <div className="inline-flex size-12 items-center justify-center rounded-xl bg-gradient-to-br from-pink-500 to-orange-500">
            <Rocket className="size-6 text-white" />
          </div>
        </div>
        <h3 className="text-xl font-semibold text-white mb-3">大型应用</h3>
        <p className="text-sm text-white/70 leading-relaxed">端到端的完整产品项目，涵盖数据、训练、服务与部署。</p>
      </TiltCard>
  
      {/* 开源与协作 */}
      <TiltCard className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 transition-all hover:bg-white/10 hover:border-white/20">
        <div className="mb-4">
          <div className="inline-flex size-12 items-center justify-center rounded-xl bg-gradient-to-br from-green-500 to-blue-500">
            <Users className="size-6 text-white" />
          </div>
        </div>
        <h3 className="text-xl font-semibold text-white mb-3">开源与协作</h3>
        <p className="text-sm text-white/70 leading-relaxed">参与社区与开源项目，共建生态，收获代码贡献与合作机会。</p>
      </TiltCard>
      </div>
    </section>

      {/* 精选资源区域 */}
      <section id="resources" className="container-hero px-6 py-24 scroll-mt-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">精选资源</h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            全球顶尖AI工具和学习资源，一站式获取
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* 大语言模型 */}
          <TiltCard className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/20">
            {/* 顶部线条动画 */}
            <div className="absolute top-0 left-1/2 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 transform -translate-x-1/2 w-0 group-hover:w-full transition-all duration-500 ease-out"></div>
            <div className="mb-4">
              <div className="inline-flex size-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500">
                <Bot className="size-6 text-white" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Deepseek</h3>
            <p className="text-sm text-white/70 leading-relaxed mb-4">
              我可以帮你写代码、读文件、写作各种创意内容，请把你的任务交给我吧~
            </p>
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center gap-1 text-xs text-white/60">
                <Bot className="size-3" />
                热门
              </span>
              <a
                href="https://chat.deepseek.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-white/80 hover:text-white transition-colors"
              >
                立即访问
              </a>
              {/* <span className="text-xs text-white/60">200+ 工具</span> */}
            </div>
          </TiltCard>

          {/* 计算机视觉 */}
          <TiltCard className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:-translate-y-2 hover:shadow-2xl hover:shadow-green-500/20">
            {/* 顶部线条动画 */}
            <div className="absolute top-0 left-1/2 h-0.5 bg-gradient-to-r from-green-500 to-emerald-500 transform -translate-x-1/2 w-0 group-hover:w-full transition-all duration-500 ease-out"></div>
            <div className="mb-4">
              <div className="inline-flex size-12 items-center justify-center rounded-xl bg-gradient-to-br from-green-500 to-emerald-500">
                <Eye className="size-6 text-white" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">通往AGI之路</h3>
            <p className="text-sm text-white/70 leading-relaxed mb-4">
              我们的目标是让每个人的学习过程少走弯路，让更多的人因 AI 而强大。
            </p>
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center gap-1 text-xs text-white/60">
                <Eye className="size-3" />
                精选
              </span>
              <a
                href="https://www.waytoagi.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-white/80 hover:text-white transition-colors"
              >
                立即访问
              </a>
              {/* <span className="text-xs text-white/60">150+ 工具</span> */}
            </div>
          </TiltCard>

          {/* 开发框架 */}
          <TiltCard className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/20">
            {/* 顶部线条动画 */}
            <div className="absolute top-0 left-1/2 h-0.5 bg-gradient-to-r from-purple-500 to-violet-500 transform -translate-x-1/2 w-0 group-hover:w-full transition-all duration-500 ease-out"></div>
            <div className="mb-4">
              <div className="inline-flex size-12 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-violet-500">
                <Code className="size-6 text-white" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Trae</h3>
            <p className="text-sm text-white/70 leading-relaxed mb-4">
              一个能理解需求、调动工具、独立完成各类开发任务的超级 AI 开发工程师。
            </p>
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center gap-1 text-xs text-white/60">
                <Code className="size-3" />
                开发
              </span>
              <a
                href="https://www.trae.cn/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-white/80 hover:text-white transition-colors"
              >
                立即访问
              </a>
              {/* <span className="text-xs text-white/60">80+ 工具</span> */}
            </div>
          </TiltCard>

          {/* 数据科学 */}
          <TiltCard className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:-translate-y-2 hover:shadow-2xl hover:shadow-orange-500/20">
            {/* 顶部线条动画 */}
            <div className="absolute top-0 left-1/2 h-0.5 bg-gradient-to-r from-orange-500 to-red-500 transform -translate-x-1/2 w-0 group-hover:w-full transition-all duration-500 ease-out"></div>
            <div className="mb-4">
              <div className="inline-flex size-12 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500 to-red-500">
                <BarChart3 className="size-6 text-white" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">数据科学</h3>
            <p className="text-sm text-white/70 leading-relaxed mb-4">
              分析与可视化工具，助力数据驱动的机器学习项目
            </p>
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center gap-1 text-xs text-white/60">
                <BarChart3 className="size-3" />
                分析
              </span>
              <span className="text-xs text-white/60">120+ 工具</span>
            </div>
          </TiltCard>

          {/* 学习资源 */}
          <TiltCard className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/20">
            {/* 顶部线条动画 */}
            <div className="absolute top-0 left-1/2 h-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 transform -translate-x-1/2 w-0 group-hover:w-full transition-all duration-500 ease-out"></div>
            <div className="mb-4">
              <div className="inline-flex size-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-indigo-500">
                <GraduationCap className="size-6 text-white" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">学习资源</h3>
            <p className="text-sm text-white/70 leading-relaxed mb-4">
              课程和教材集合，从入门到深度学习的系统性课程
            </p>
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center gap-1 text-xs text-white/60">
                <GraduationCap className="size-3" />
                课程
              </span>
              <span className="text-xs text-white/60">300+ 资源</span>
            </div>
          </TiltCard>

          {/* 行业资讯 */}
          <TiltCard className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:-translate-y-2 hover:shadow-2xl hover:shadow-pink-500/20">
            {/* 顶部线条动画 */}
            <div className="absolute top-0 left-1/2 h-0.5 bg-gradient-to-r from-pink-500 to-rose-500 transform -translate-x-1/2 w-0 group-hover:w-full transition-all duration-500 ease-out"></div>
            <div className="mb-4">
              <div className="inline-flex size-12 items-center justify-center rounded-xl bg-gradient-to-br from-pink-500 to-rose-500">
                <Newspaper className="size-6 text-white" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">行业资讯</h3>
            <p className="text-sm text-white/70 leading-relaxed mb-4">
              前沿动态跟踪，掌握AI行业最新发展与趋势洞察
            </p>
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center gap-1 text-xs text-white/60">
                <Newspaper className="size-3" />
                资讯
              </span>
              <span className="text-xs text-white/60">每日更新</span>
            </div>
          </TiltCard>
        </div>
      </section>

      {/* 关于我们（重构） */}
      <section id="about" className="container-hero px-6 py-24 scroll-mt-24">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* 左列：标题与说明 */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs text-white/70 ring-1 ring-white/15">
              <Sparkles className="size-3.5 text-yellow-300" />
              被你发现啦
            </div>
            <h2 className="mt-6 text-3xl sm:text-4xl font-extrabold text-white tracking-tight">关于我</h2>
            <p className="mt-5 text-base sm:text-lg leading-7 text-white/70">
              热爱探索新技术，AI技术实践，周末短途旅行，追求健康、快乐、自由的生活方式。
            </p>

            {/* 三个亮点 */}
            <ul className="mt-8 space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="mt-1 size-5 text-green-400" />
                <div>
                  <p className="text-white font-medium">个性化学习路径</p>
                  <p className="text-white/65 text-sm">根据你的背景和目标智能生成路线，并实时调整。</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="mt-1 size-5 text-green-400" />
                <div>
                  <p className="text-white font-medium">项目驱动实践</p>
                  <p className="text-white/65 text-sm">边学边做，沉淀可复用的项目与作品集。</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="mt-1 size-5 text-green-400" />
                <div>
                  <p className="text-white font-medium">全球社区支持</p>
                  <p className="text-white/65 text-sm">与学习者和专家连接，持续获取反馈与灵感。</p>
                </div>
              </li>
            </ul>

            {/* CTA */}
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="#resources">
                <Button className="btn-glow">查看更多资源</Button>
              </Link>
              <Link href="#contact">
                <Button variant="outline" className="btn-glow">与我联系</Button>
              </Link>
            </div>
          </div>

          {/* 右列：视觉卡片/数据 */}
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="text-3xl font-extrabold text-white">10k+</div>
              <p className="mt-1 text-sm text-white/60">粉丝用户</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="text-3xl font-extrabold text-white">500+</div>
              <p className="mt-1 text-sm text-white/60">精选学习资源</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="text-3xl font-extrabold text-white">120+</div>
              <p className="mt-1 text-sm text-white/60">项目与案例</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="text-3xl font-extrabold text-white">30+</div>
              <p className="mt-1 text-sm text-white/60">行业实践方向</p>
            </div>
          </div>
        </div>
      </section>

      {/* 联系我们 & 底部区域 */}
      <section id="contact" className="container-hero px-6 py-24 scroll-mt-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">与我联系</h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
             高兴遇见你！我随时在这里，倾听你的声音~
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {/* 邮件联系 */}
          <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 transition-all hover:bg-white/10 hover:border-white/20">
            <div className="mb-4">
              <div className="inline-flex size-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500">
                <Mail className="size-6 text-white" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">邮件联系</h3>
            <p className="text-sm text-white/70 leading-relaxed mb-4">
              发送邮件给我，我会在24小时内回复您的问题
            </p>
            <a href="mailto:yabing1118@163.com" className="text-blue-400 hover:text-blue-300 transition-colors text-sm">
              yabing1118@163.com
            </a>
          </div>

          {/* 在线交流 */}
          <div id="wechat-card" className="flip-card group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition-all hover:bg-white/10 hover:border-white/20 min-h-[220px]">
            {/* 隐藏的切换器：不改变 URL，无跳转 */}
            <input type="checkbox" id="wechatToggle" />
            <div className="flip-inner">
              <div className="flip-front p-6">
                <div className="mb-4">
                  <div className="inline-flex size-12 items-center justify-center rounded-xl bg-gradient-to-br from-green-500 to-emerald-500">
                    <MessageCircle className="size-6 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">在线交流</h3>
                <p className="text-sm text-white/70 leading-relaxed mb-4">
                  加入我们的社群，与其他学习者实时交流
                </p>
                {/* 用 label 触发 checkbox，从而翻转卡片 */}
                <label htmlFor="wechatToggle" className="cursor-pointer text-green-400 hover:text-green-300 transition-colors text-sm">
                  微信交流
                </label>
              </div>

              {/* 背面：点击任意区域复位（再次触发 label/checkbox） */}
              <label htmlFor="wechatToggle" className="flip-back p-6 flex flex-col items-center justify-center cursor-pointer">
                <Image src={wechatQR} alt="微信二维码" className="rounded-xl ring-1 ring-white/10 shadow-lg w-44 h-44 object-cover" />
                <span className="mt-3 text-xs text-white/80">点击任意处返回</span>
              </label>
            </div>
          </div>

          {/* 开源合作 */}
          <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 transition-all hover:bg-white/10 hover:border-white/20">
            <div className="mb-4">
              <div className="inline-flex size-12 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-pink-500">
                <Github className="size-6 text-white" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">开源合作</h3>
            <p className="text-sm text-white/70 leading-relaxed mb-4">
              欢迎参与开源项目，共同构建更好的学习生态
            </p>
            <a href="https://github.com/" className="text-purple-400 hover:text-purple-300 transition-colors text-sm">
              GitHub 仓库
            </a>
          </div>
        </div>

        {/* 底部导航区域 */}
        <div className="border-t border-white/10 pt-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            {/* Logo 和介绍 */}
            <div className="md:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <div className="size-8 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center overflow-hidden">
                  <svg 
                    className="w-6 h-6 animate-bounce" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                    style={{
                      animation: 'bounce 1.2s infinite, rotate 3s ease-in-out infinite alternate'
                    }}
                  >
                    {/* 头部 */}
                    <circle cx="12" cy="8" r="6" fill="#FFE4E1" stroke="#FFB6C1" strokeWidth="0.5"/>
                    
                    {/* 左眼 */}
                    <circle cx="10" cy="7" r="0.8" fill="#333">
                      <animate attributeName="r" values="0.8;0.1;0.8" dur="3s" repeatCount="indefinite"/>
                    </circle>
                    
                    {/* 右眼 */}
                    <circle cx="14" cy="7" r="0.8" fill="#333">
                      <animate attributeName="r" values="0.8;0.1;0.8" dur="3s" repeatCount="indefinite"/>
                    </circle>
                    
                    {/* 腮红 */}
                    <circle cx="8.5" cy="8.5" r="1" fill="#FFB6C1" opacity="0.6"/>
                    <circle cx="15.5" cy="8.5" r="1" fill="#FFB6C1" opacity="0.6"/>
                    
                    {/* 嘴巴 */}
                    <path d="M10 10 Q12 12 14 10" stroke="#FF69B4" strokeWidth="0.8" fill="none" strokeLinecap="round">
                      <animate attributeName="d" values="M10 10 Q12 12 14 10;M10 10 Q12 11 14 10;M10 10 Q12 12 14 10" dur="2s" repeatCount="indefinite"/>
                    </path>
                    
                    {/* 身体 */}
                    <ellipse cx="12" cy="18" rx="4" ry="3" fill="#E6E6FA" stroke="#DDA0DD" strokeWidth="0.5"/>
                    
                    {/* 小心心装饰 */}
                    <path d="M12 15 L11 14 Q10.5 13.5 11 14 Q11.5 13.5 12 14 Q12.5 13.5 13 14 Q13.5 13.5 13 14 L12 15" fill="#FF69B4" opacity="0.8">
                      <animateTransform attributeType="XML" attributeName="transform" type="scale" values="1;1.2;1" dur="2s" repeatCount="indefinite"/>
                    </path>
                    
                    {/* 闪烁的小星星 */}
                    <g opacity="0.8">
                      <path d="M18 6 L18.5 7 L19 6 L18.5 5 Z" fill="#FFD700">
                        <animateTransform attributeType="XML" attributeName="transform" type="rotate" values="0 18.5 6;360 18.5 6" dur="4s" repeatCount="indefinite"/>
                        <animate attributeName="opacity" values="0.3;1;0.3" dur="1.5s" repeatCount="indefinite"/>
                      </path>
                      <path d="M6 4 L6.3 4.7 L7 4 L6.3 3.3 Z" fill="#FFD700">
                        <animateTransform attributeType="XML" attributeName="transform" type="rotate" values="0 6.5 4;360 6.5 4" dur="3s" repeatCount="indefinite"/>
                        <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite"/>
                      </path>
                    </g>
                  </svg>
                </div>
                <span className="text-xl font-bold text-white">Super Bao</span>
              </div>
              <p className="text-sm text-white/70 leading-relaxed mb-4">
                做你没做过的事情叫成长，做你不愿意做的事情叫改变，做你不敢做的事情叫突破。
              </p>
              <div className="flex items-center gap-3">
                <a href="#" className="size-8 rounded-full bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center">
                  <Github className="size-4 text-white" />
                </a>
                <a href="#" className="size-8 rounded-full bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center">
                  <Twitter className="size-4 text-white" />
                </a>
                <a href="#" className="size-8 rounded-full bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center">
                  <Linkedin className="size-4 text-white" />
                </a>
              </div>
            </div>

            {/* 学习资源 */}
            <div>
              <h4 className="text-white font-semibold mb-4">学习资源</h4>
              <div className="space-y-2">
                <a href="#" className="block text-sm text-white/70 hover:text-white transition-colors">AI基础教程</a>
                <a href="#" className="block text-sm text-white/70 hover:text-white transition-colors">机器学习实战</a>
                <a href="#" className="block text-sm text-white/70 hover:text-white transition-colors">深度学习项目</a>
                <a href="#" className="block text-sm text-white/70 hover:text-white transition-colors">项目案例库</a>
              </div>
            </div>

            {/* 工具资源 */}
            <div>
              <h4 className="text-white font-semibold mb-4">工具资源</h4>
              <div className="space-y-2">
                <a href="#" className="block text-sm text-white/70 hover:text-white transition-colors">大语言模型</a>
                <a href="#" className="block text-sm text-white/70 hover:text-white transition-colors">开发框架</a>
                <a href="#" className="block text-sm text-white/70 hover:text-white transition-colors">数据集合集</a>
                <a href="#" className="block text-sm text-white/70 hover:text-white transition-colors">API接口</a>
              </div>
            </div>

            {/* 关于我们 */}
            <div>
              <h4 className="text-white font-semibold mb-4">关于我们</h4>
              <div className="space-y-2">
                <a href="#" className="block text-sm text-white/70 hover:text-white transition-colors">团队介绍</a>
                <a href="#" className="block text-sm text-white/70 hover:text-white transition-colors">联系我们</a>
                <a href="#" className="block text-sm text-white/70 hover:text-white transition-colors">合作伙伴</a>
                <a href="#" className="block text-sm text-white/70 hover:text-white transition-colors">隐私政策</a>
              </div>
            </div>
          </div>

          {/* 版权信息 */}
          <div className="border-t border-white/10 pt-6 text-center">
            <p className="text-sm text-white/60">
              © 2025 SuperBao. All rights reserved. 
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
