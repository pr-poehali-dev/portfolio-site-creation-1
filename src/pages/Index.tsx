import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Index = () => {
  const skills = [
    "React",
    "TypeScript",
    "Node.js",
    "Python",
    "PostgreSQL",
    "Docker",
    "AWS",
    "Git",
  ];

  const projects = [
    {
      title: "E-commerce Platform",
      description:
        "Современная платформа электронной коммерции с микросервисной архитектурой",
      tech: ["React", "Node.js", "PostgreSQL"],
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop",
    },
    {
      title: "Analytics Dashboard",
      description:
        "Интерактивная панель аналитики с real-time визуализацией данных",
      tech: ["React", "D3.js", "Python"],
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
    },
    {
      title: "Mobile App",
      description:
        "Кроссплатформенное мобильное приложение для управления задачами",
      tech: ["React Native", "Firebase"],
      image:
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=250&fit=crop",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-zinc-900">
      {/* Header */}
      <header className="bg-black/80 backdrop-blur-sm border-b border-red-500/20 sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <nav className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-red-400">
              [Ваше Имя] • Developer
            </h1>
            <div className="hidden md:flex space-x-8">
              <a
                href="#about"
                className="text-slate-300 hover:text-red-400 transition-colors"
              >
                О себе
              </a>
              <a
                href="#skills"
                className="text-slate-300 hover:text-red-400 transition-colors"
              >
                Навыки
              </a>
              <a
                href="#projects"
                className="text-slate-300 hover:text-red-400 transition-colors"
              >
                Проекты
              </a>
              <a
                href="#contact"
                className="text-slate-300 hover:text-red-400 transition-colors"
              >
                Контакты
              </a>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-950/20 to-slate-900/20 py-20 border-b border-red-500/10">
        <div className="container mx-auto px-6 text-center">
          <div className="mb-8">
            <div className="w-32 h-32 rounded-full mx-auto mb-6 bg-gradient-to-br from-red-600 to-red-800 shadow-2xl shadow-red-500/25 flex items-center justify-center">
              <span className="text-4xl">⚔️</span>
            </div>
          </div>
          <h2 className="text-5xl font-bold text-white mb-6">
            Привет! Я{" "}
            <span className="text-red-400 animate-pulse">[Ваше Имя]</span>
          </h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            [Ваша специализация] с [X] годами опыта. Создаю качественные решения
            для веб и мобильных платформ.
          </p>
          <div className="flex gap-4 justify-center">
            <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-all transform hover:scale-105 shadow-lg shadow-red-500/25">
              Посмотреть проекты
            </button>
            <button className="border border-red-400 text-red-400 hover:bg-red-400 hover:text-black px-8 py-3 rounded-lg font-semibold transition-all">
              Скачать CV
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-6">
          <h3 className="text-3xl font-bold text-center mb-12">О себе</h3>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Опытный fullstack разработчик с 5+ годами коммерческого опыта.
                Создаю качественные цифровые продукты от идеи до релиза.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Постоянно изучаю новые технологии и следую лучшим практикам
                разработки. Умею работать как в команде, так и самостоятельно.
              </p>
              <div className="flex gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">50+</div>
                  <div className="text-sm text-gray-600">Проектов</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">5+</div>
                  <div className="text-sm text-gray-600">Лет опыта</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">20+</div>
                  <div className="text-sm text-gray-600">Технологий</div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <h4 className="text-xl font-semibold mb-4">Мой подход</h4>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  Чистый и поддерживаемый код
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  Современные технологии и инструменты
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  Агильная методология разработки
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  Постоянное обучение и развитие
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h3 className="text-3xl font-bold text-center mb-12">
            Навыки и технологии
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>Frontend</CardTitle>
                <CardDescription>
                  Современные пользовательские интерфейсы
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 justify-center">
                  {["React", "TypeScript", "Tailwind CSS", "Next.js"].map(
                    (skill) => (
                      <Badge key={skill} variant="secondary">
                        {skill}
                      </Badge>
                    ),
                  )}
                </div>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>Backend</CardTitle>
                <CardDescription>Серверные решения и API</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 justify-center">
                  {["Node.js", "Python", "PostgreSQL", "MongoDB"].map(
                    (skill) => (
                      <Badge key={skill} variant="secondary">
                        {skill}
                      </Badge>
                    ),
                  )}
                </div>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>DevOps</CardTitle>
                <CardDescription>Развертывание и мониторинг</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 justify-center">
                  {["Docker", "AWS", "Git", "CI/CD"].map((skill) => (
                    <Badge key={skill} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-6">
          <h3 className="text-3xl font-bold text-center mb-12">
            Избранные проекты
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-xl transition-shadow group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <Button variant="outline" className="w-full">
                    Подробнее
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 bg-gradient-to-r from-primary/5 to-purple-600/5"
      >
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold mb-6">Готовы работать вместе?</h3>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Свяжитесь со мной для обсуждения вашего проекта. Отвечу в течение 24
            часов!
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg">📧 Написать email</Button>
            <Button variant="outline" size="lg">
              💬 Telegram
            </Button>
            <Button variant="outline" size="lg">
              🔗 LinkedIn
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; 2024 Портфолио разработчика. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
