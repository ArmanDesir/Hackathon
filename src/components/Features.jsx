import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const FeaturesSection = () => {
  return (
    <Container className="py-5 text-center">
      <h2 className="fw-bold">Why Choose NoteAlly AI?</h2>
      <p className="text-muted">
        Powerful features designed to make studying easier and more effective.
      </p>

      <Row className="mt-4">
        {/* Feature 1 */}
        <Col md={4} className="mb-4">
          <Card className="shadow-sm border-0">
            <Card.Body>
              <h5 className="fw-bold">📚 AI-Powered Study Assistance</h5>
              <p className="text-muted">
                Get instant answers and explanations to your study questions
                using AI.
              </p>
            </Card.Body>
          </Card>
        </Col>

        {/* Feature 2 */}
        <Col md={4} className="mb-4">
          <Card className="shadow-sm border-0">
            <Card.Body>
              <h5 className="fw-bold">📝 Smart Note-Taking</h5>
              <p className="text-muted">
                Automatically generate and organize study notes from your
                materials.
              </p>
            </Card.Body>
          </Card>
        </Col>

        {/* Feature 3 */}
        <Col md={4} className="mb-4">
          <Card className="shadow-sm border-0">
            <Card.Body>
              <h5 className="fw-bold">🎯 Assignment Helper</h5>
              <p className="text-muted">
                Get step-by-step guidance on solving homework and assignments.
              </p>
            </Card.Body>
          </Card>
        </Col>

        {/* Feature 4 */}
        <Col md={4} className="mb-4">
          <Card className="shadow-sm border-0">
            <Card.Body>
              <h5 className="fw-bold">🎙️ Voice-to-Text Conversion</h5>
              <p className="text-muted">
                Convert lectures and discussions into notes effortlessly.
              </p>
            </Card.Body>
          </Card>
        </Col>

        {/* Feature 5 */}
        <Col md={4} className="mb-4">
          <Card className="shadow-sm border-0">
            <Card.Body>
              <h5 className="fw-bold">☁️ Cloud Sync & Accessibility</h5>
              <p className="text-muted">
                Access your notes anytime, anywhere with secure cloud storage.
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default FeaturesSection;
