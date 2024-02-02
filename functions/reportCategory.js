function provideRecommendations(overallScore, category) {
    if (overallScore >= 4.5) {
      return `Your ${category} skills are outstanding! Continue to challenge yourself with complex problems and encourage others to do the same.`;
    } else if (overallScore >= 3.5) {
      return `You have strong ${category} skills, but there is room for improvement. Consider exploring more challenging problems and seeking diverse perspectives.`;
    } else if (overallScore >= 2.5) {
      return `Your ${category} skills are average. Focus on developing a deeper understanding of problems and practice creative problem-solving techniques.`;
    } else {
      return `Your ${category} skills may benefit from improvement. Work on analyzing situations more thoroughly and exploring different approaches to problem-solving.`;
    }
  }