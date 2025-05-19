import React from "react";

const WorkoutSessions = () => {
  return (
    <section className="workout_session">
      <div className="wrapper">
        <h1>Top Workout Sessions</h1>
        <p>
          Discover our most popular workout sessions designed to help you reach
          your fitness goals. From high-intensity interval training to strength
          and conditioning, we offer something for every fitness level.
        </p>
        <img
          src="https://images.unsplash.com/photo-1605296867304-46d5465a13f1?auto=format&fit=crop&w=800&q=80"
          alt="Workout session"
          style={{ maxWidth: "100%", borderRadius: "8px", marginTop: "1rem" }}
        />
      </div>

      <div className="wrapper">
        <h1>Featured Bootcamps</h1>
        <p>
          Join our specialized bootcamps to push your limits and achieve
          results. Our certified trainers lead engaging, dynamic group sessions
          that are both challenging and fun.
        </p>

        <div className="bootcamps">
          <div>
            <h4>HIIT Power Bootcamp</h4>
            <p>
              A high-intensity interval training session that combines cardio
              and strength for maximum fat burn. Great for boosting endurance
              and metabolism.
            </p>
          </div>

          <div>
            <h4>Strength & Sculpt</h4>
            <p>
              Build muscle and tone your body with this full-body resistance
              training bootcamp using free weights, bands, and bodyweight
              exercises.
            </p>
          </div>

          <div>
            <h4>Core & Mobility Camp</h4>
            <p>
              Improve your core strength and flexibility with functional
              movements, mobility drills, and balance-focused exercises.
            </p>
          </div>

          <div>
            <h4>BoxFit Conditioning</h4>
            <p>
              A boxing-inspired workout designed to improve cardiovascular
              fitness, agility, and power — no experience required!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkoutSessions;
