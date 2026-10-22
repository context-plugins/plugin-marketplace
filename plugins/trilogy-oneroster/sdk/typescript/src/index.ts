export { OneRosterApiClient } from "./client.js";
export type { ClientOptions } from "./client-options.js";

export {
  PkceMethod,
  type OAuth2AuthorizationCodeCredentials,
  type OAuth2ClientCredentials,
  type AuthorizationCodePrompt,
} from "./core/auth/credentials.js";
export type {
  OAuth2RefreshableTokenStrategy,
  OAuth2TokenStrategy,
  OAuthToken,
  OAuth2CredentialPlacement,
  OAuthTokenRefreshable,
} from "./core/auth/oauth2-strategies.js";

export { AcademicSessionsManagement } from "./resources/academic-sessions-management.js";
export { AssessmentLineItemsManagement } from "./resources/assessment-line-items-management.js";
export { AssessmentResultsManagement } from "./resources/assessment-results-management.js";
export { CategoriesManagement } from "./resources/categories-management.js";
export { ClassesManagement } from "./resources/classes-management.js";
export { TeachersManagement } from "./resources/teachers-management.js";
export { StudentsManagement } from "./resources/students-management.js";
export { CoursesManagement } from "./resources/courses-management.js";
export { CourseComponentResourcesManagement } from "./resources/course-component-resources-management.js";
export { CourseComponentsManagement } from "./resources/course-components-management.js";
export { DemographicsManagement } from "./resources/demographics-management.js";
export { EnrollmentsManagement } from "./resources/enrollments-management.js";
export { GradingPeriodsManagement } from "./resources/grading-periods-management.js";
export { LineItemsManagement } from "./resources/line-items-management.js";
export { OrganizationsManagement } from "./resources/organizations-management.js";
export { ResourcesManagement } from "./resources/resources-management.js";
export { ResultsManagement } from "./resources/results-management.js";
export { SchoolsManagement } from "./resources/schools-management.js";
export { ScoreScalesManagement } from "./resources/score-scales-management.js";
export { TermsManagement } from "./resources/terms-management.js";
export { UsersManagement } from "./resources/users-management.js";

export { academicSessionSchema, type AcademicSession } from "./models/academic-session.js";
export { academicSession1Schema, type AcademicSession1 } from "./models/academic-session1.js";
export { academicSession14Schema, type AcademicSession14 } from "./models/academic-session14.js";
export { academicSession5Schema, type AcademicSession5 } from "./models/academic-session5.js";
export { academicSession7Schema, type AcademicSession7 } from "./models/academic-session7.js";
export { agentSchema, type Agent } from "./models/agent.js";
export { agent1Schema, type Agent1 } from "./models/agent1.js";
export {
  AmericanIndianOrAlaskaNative,
  americanIndianOrAlaskaNativeSchema,
} from "./models/american-indian-or-alaska-native.js";
export { Asian, asianSchema } from "./models/asian.js";
export { assessmentLineItemSchema, type AssessmentLineItem } from "./models/assessment-line-item.js";
export { assessmentLineItem1Schema, type AssessmentLineItem1 } from "./models/assessment-line-item1.js";
export { assessmentResultSchema, type AssessmentResult } from "./models/assessment-result.js";
export { badRequestResponseSchema, type BadRequestResponse } from "./models/bad-request-response.js";
export {
  badRequestResponseErrorSchema,
  type BadRequestResponseError,
} from "./models/bad-request-response-error.js";
export { BlackOrAfricanAmerican, blackOrAfricanAmericanSchema } from "./models/black-or-african-american.js";
export { categorySchema, type Category } from "./models/category.js";
export { category1Schema, type Category1 } from "./models/category1.js";
export { childSchema, type Child } from "./models/child.js";
export { classSchema, type Class } from "./models/class.js";
export { class1Schema, type Class1 } from "./models/class1.js";
export { class17Schema, type Class17 } from "./models/class17.js";
export { class18Schema, type Class18 } from "./models/class18.js";
export { class5Schema, type Class5 } from "./models/class5.js";
export { ClassType, classTypeSchema } from "./models/class-type.js";
export { componentSchema, type Component } from "./models/component.js";
export { componentResourceSchema, type ComponentResource } from "./models/component-resource.js";
export { componentResource2Schema, type ComponentResource2 } from "./models/component-resource2.js";
export { componentResource3Schema, type ComponentResource3 } from "./models/component-resource3.js";
export { courseSchema, type Course } from "./models/course.js";
export { course1Schema, type Course1 } from "./models/course1.js";
export { course12Schema, type Course12 } from "./models/course12.js";
export { courseComponentSchema, type CourseComponent } from "./models/course-component.js";
export { courseComponent4Schema, type CourseComponent4 } from "./models/course-component4.js";
export { courseComponent6Schema, type CourseComponent6 } from "./models/course-component6.js";
export {
  DemographicRaceTwoOrMoreRaces,
  demographicRaceTwoOrMoreRacesSchema,
} from "./models/demographic-race-two-or-more-races.js";
export { demographicsSchema, type Demographics } from "./models/demographics.js";
export { demographics2Schema, type Demographics2 } from "./models/demographics2.js";
export { enrollmentSchema, type Enrollment } from "./models/enrollment.js";
export { enrollment1Schema, type Enrollment1 } from "./models/enrollment1.js";
export { enrollment4Schema, type Enrollment4 } from "./models/enrollment4.js";
export { enrollment5Schema, type Enrollment5 } from "./models/enrollment5.js";
export { forbiddenResponseSchema, type ForbiddenResponse } from "./models/forbidden-response.js";
export {
  forbiddenResponseErrorSchema,
  type ForbiddenResponseError,
} from "./models/forbidden-response-error.js";
export { gradingPeriodSchema, type GradingPeriod } from "./models/grading-period.js";
export {
  HispanicOrLatinoEthnicity,
  hispanicOrLatinoEthnicitySchema,
} from "./models/hispanic-or-latino-ethnicity.js";
export { Importance, importanceSchema } from "./models/importance.js";
export {
  imsOnerosterGradebookV1P2AssessmentLineItemsRequestSchema,
  type ImsOnerosterGradebookV1P2AssessmentLineItemsRequest,
} from "./models/ims-oneroster-gradebook-v1-p2-assessment-line-items-request.js";
export {
  imsOnerosterGradebookV1P2AssessmentLineItemsResponseSchema,
  type ImsOnerosterGradebookV1P2AssessmentLineItemsResponse,
} from "./models/ims-oneroster-gradebook-v1-p2-assessment-line-items-response.js";
export {
  imsOnerosterGradebookV1P2AssessmentLineItemsResponse1Schema,
  type ImsOnerosterGradebookV1P2AssessmentLineItemsResponse1,
} from "./models/ims-oneroster-gradebook-v1-p2-assessment-line-items-response1.js";
export {
  imsOnerosterGradebookV1P2AssessmentLineItemsResponse2Schema,
  type ImsOnerosterGradebookV1P2AssessmentLineItemsResponse2,
} from "./models/ims-oneroster-gradebook-v1-p2-assessment-line-items-response2.js";
export {
  imsOnerosterGradebookV1P2AssessmentResultsRequestSchema,
  type ImsOnerosterGradebookV1P2AssessmentResultsRequest,
} from "./models/ims-oneroster-gradebook-v1-p2-assessment-results-request.js";
export {
  imsOnerosterGradebookV1P2AssessmentResultsResponseSchema,
  type ImsOnerosterGradebookV1P2AssessmentResultsResponse,
} from "./models/ims-oneroster-gradebook-v1-p2-assessment-results-response.js";
export {
  imsOnerosterGradebookV1P2AssessmentResultsResponse1Schema,
  type ImsOnerosterGradebookV1P2AssessmentResultsResponse1,
} from "./models/ims-oneroster-gradebook-v1-p2-assessment-results-response1.js";
export {
  imsOnerosterGradebookV1P2AssessmentResultsResponse2Schema,
  type ImsOnerosterGradebookV1P2AssessmentResultsResponse2,
} from "./models/ims-oneroster-gradebook-v1-p2-assessment-results-response2.js";
export {
  imsOnerosterGradebookV1P2CategoriesRequestSchema,
  type ImsOnerosterGradebookV1P2CategoriesRequest,
} from "./models/ims-oneroster-gradebook-v1-p2-categories-request.js";
export {
  imsOnerosterGradebookV1P2CategoriesResponseSchema,
  type ImsOnerosterGradebookV1P2CategoriesResponse,
} from "./models/ims-oneroster-gradebook-v1-p2-categories-response.js";
export {
  imsOnerosterGradebookV1P2CategoriesResponse1Schema,
  type ImsOnerosterGradebookV1P2CategoriesResponse1,
} from "./models/ims-oneroster-gradebook-v1-p2-categories-response1.js";
export {
  imsOnerosterGradebookV1P2CategoriesResponse2Schema,
  type ImsOnerosterGradebookV1P2CategoriesResponse2,
} from "./models/ims-oneroster-gradebook-v1-p2-categories-response2.js";
export {
  imsOnerosterGradebookV1P2ClassesAcademicSessionsResultsRequestSchema,
  type ImsOnerosterGradebookV1P2ClassesAcademicSessionsResultsRequest,
} from "./models/ims-oneroster-gradebook-v1-p2-classes-academic-sessions-results-request.js";
export {
  imsOnerosterGradebookV1P2ClassesAcademicSessionsResultsResponseSchema,
  type ImsOnerosterGradebookV1P2ClassesAcademicSessionsResultsResponse,
} from "./models/ims-oneroster-gradebook-v1-p2-classes-academic-sessions-results-response.js";
export {
  imsOnerosterGradebookV1P2ClassesCategoriesResponseSchema,
  type ImsOnerosterGradebookV1P2ClassesCategoriesResponse,
} from "./models/ims-oneroster-gradebook-v1-p2-classes-categories-response.js";
export {
  imsOnerosterGradebookV1P2ClassesLineItemsRequestSchema,
  type ImsOnerosterGradebookV1P2ClassesLineItemsRequest,
} from "./models/ims-oneroster-gradebook-v1-p2-classes-line-items-request.js";
export {
  imsOnerosterGradebookV1P2ClassesLineItemsResponseSchema,
  type ImsOnerosterGradebookV1P2ClassesLineItemsResponse,
} from "./models/ims-oneroster-gradebook-v1-p2-classes-line-items-response.js";
export {
  imsOnerosterGradebookV1P2ClassesLineItemsResponse1Schema,
  type ImsOnerosterGradebookV1P2ClassesLineItemsResponse1,
} from "./models/ims-oneroster-gradebook-v1-p2-classes-line-items-response1.js";
export {
  imsOnerosterGradebookV1P2ClassesLineItemsResultsResponseSchema,
  type ImsOnerosterGradebookV1P2ClassesLineItemsResultsResponse,
} from "./models/ims-oneroster-gradebook-v1-p2-classes-line-items-results-response.js";
export {
  imsOnerosterGradebookV1P2ClassesResultsResponseSchema,
  type ImsOnerosterGradebookV1P2ClassesResultsResponse,
} from "./models/ims-oneroster-gradebook-v1-p2-classes-results-response.js";
export {
  imsOnerosterGradebookV1P2ClassesScoreScalesResponseSchema,
  type ImsOnerosterGradebookV1P2ClassesScoreScalesResponse,
} from "./models/ims-oneroster-gradebook-v1-p2-classes-score-scales-response.js";
export {
  imsOnerosterGradebookV1P2ClassesStudentsResultsResponseSchema,
  type ImsOnerosterGradebookV1P2ClassesStudentsResultsResponse,
} from "./models/ims-oneroster-gradebook-v1-p2-classes-students-results-response.js";
export {
  imsOnerosterGradebookV1P2LineItemsRequestSchema,
  type ImsOnerosterGradebookV1P2LineItemsRequest,
} from "./models/ims-oneroster-gradebook-v1-p2-line-items-request.js";
export {
  imsOnerosterGradebookV1P2LineItemsResponseSchema,
  type ImsOnerosterGradebookV1P2LineItemsResponse,
} from "./models/ims-oneroster-gradebook-v1-p2-line-items-response.js";
export {
  imsOnerosterGradebookV1P2LineItemsResponse1Schema,
  type ImsOnerosterGradebookV1P2LineItemsResponse1,
} from "./models/ims-oneroster-gradebook-v1-p2-line-items-response1.js";
export {
  imsOnerosterGradebookV1P2LineItemsResponse2Schema,
  type ImsOnerosterGradebookV1P2LineItemsResponse2,
} from "./models/ims-oneroster-gradebook-v1-p2-line-items-response2.js";
export {
  imsOnerosterGradebookV1P2LineItemsResultsRequestSchema,
  type ImsOnerosterGradebookV1P2LineItemsResultsRequest,
} from "./models/ims-oneroster-gradebook-v1-p2-line-items-results-request.js";
export {
  imsOnerosterGradebookV1P2LineItemsResultsResponseSchema,
  type ImsOnerosterGradebookV1P2LineItemsResultsResponse,
} from "./models/ims-oneroster-gradebook-v1-p2-line-items-results-response.js";
export {
  imsOnerosterGradebookV1P2ResultsRequestSchema,
  type ImsOnerosterGradebookV1P2ResultsRequest,
} from "./models/ims-oneroster-gradebook-v1-p2-results-request.js";
export {
  imsOnerosterGradebookV1P2ResultsResponseSchema,
  type ImsOnerosterGradebookV1P2ResultsResponse,
} from "./models/ims-oneroster-gradebook-v1-p2-results-response.js";
export {
  imsOnerosterGradebookV1P2ResultsResponse1Schema,
  type ImsOnerosterGradebookV1P2ResultsResponse1,
} from "./models/ims-oneroster-gradebook-v1-p2-results-response1.js";
export {
  imsOnerosterGradebookV1P2ResultsResponse2Schema,
  type ImsOnerosterGradebookV1P2ResultsResponse2,
} from "./models/ims-oneroster-gradebook-v1-p2-results-response2.js";
export {
  imsOnerosterGradebookV1P2SchoolsLineItemsRequestSchema,
  type ImsOnerosterGradebookV1P2SchoolsLineItemsRequest,
} from "./models/ims-oneroster-gradebook-v1-p2-schools-line-items-request.js";
export {
  imsOnerosterGradebookV1P2SchoolsLineItemsResponseSchema,
  type ImsOnerosterGradebookV1P2SchoolsLineItemsResponse,
} from "./models/ims-oneroster-gradebook-v1-p2-schools-line-items-response.js";
export {
  imsOnerosterGradebookV1P2SchoolsLineItemsResponse1Schema,
  type ImsOnerosterGradebookV1P2SchoolsLineItemsResponse1,
} from "./models/ims-oneroster-gradebook-v1-p2-schools-line-items-response1.js";
export {
  imsOnerosterGradebookV1P2SchoolsScoreScalesResponseSchema,
  type ImsOnerosterGradebookV1P2SchoolsScoreScalesResponse,
} from "./models/ims-oneroster-gradebook-v1-p2-schools-score-scales-response.js";
export {
  imsOnerosterGradebookV1P2ScoreScalesRequestSchema,
  type ImsOnerosterGradebookV1P2ScoreScalesRequest,
} from "./models/ims-oneroster-gradebook-v1-p2-score-scales-request.js";
export {
  imsOnerosterGradebookV1P2ScoreScalesResponseSchema,
  type ImsOnerosterGradebookV1P2ScoreScalesResponse,
} from "./models/ims-oneroster-gradebook-v1-p2-score-scales-response.js";
export {
  imsOnerosterGradebookV1P2ScoreScalesResponse1Schema,
  type ImsOnerosterGradebookV1P2ScoreScalesResponse1,
} from "./models/ims-oneroster-gradebook-v1-p2-score-scales-response1.js";
export {
  imsOnerosterGradebookV1P2ScoreScalesResponse2Schema,
  type ImsOnerosterGradebookV1P2ScoreScalesResponse2,
} from "./models/ims-oneroster-gradebook-v1-p2-score-scales-response2.js";
export {
  imsOnerosterResourcesV1P2ResourcesClassesResourcesResponseSchema,
  type ImsOnerosterResourcesV1P2ResourcesClassesResourcesResponse,
} from "./models/ims-oneroster-resources-v1-p2-resources-classes-resources-response.js";
export {
  imsOnerosterResourcesV1P2ResourcesCoursesResourcesResponseSchema,
  type ImsOnerosterResourcesV1P2ResourcesCoursesResourcesResponse,
} from "./models/ims-oneroster-resources-v1-p2-resources-courses-resources-response.js";
export {
  imsOnerosterResourcesV1P2ResourcesRequestSchema,
  type ImsOnerosterResourcesV1P2ResourcesRequest,
} from "./models/ims-oneroster-resources-v1-p2-resources-request.js";
export {
  imsOnerosterResourcesV1P2ResourcesRequest1Schema,
  type ImsOnerosterResourcesV1P2ResourcesRequest1,
} from "./models/ims-oneroster-resources-v1-p2-resources-request1.js";
export {
  imsOnerosterResourcesV1P2ResourcesResponseSchema,
  type ImsOnerosterResourcesV1P2ResourcesResponse,
} from "./models/ims-oneroster-resources-v1-p2-resources-response.js";
export {
  imsOnerosterResourcesV1P2ResourcesResponse1Schema,
  type ImsOnerosterResourcesV1P2ResourcesResponse1,
} from "./models/ims-oneroster-resources-v1-p2-resources-response1.js";
export {
  imsOnerosterResourcesV1P2ResourcesResponse2Schema,
  type ImsOnerosterResourcesV1P2ResourcesResponse2,
} from "./models/ims-oneroster-resources-v1-p2-resources-response2.js";
export {
  imsOnerosterResourcesV1P2ResourcesUsersResourcesResponseSchema,
  type ImsOnerosterResourcesV1P2ResourcesUsersResourcesResponse,
} from "./models/ims-oneroster-resources-v1-p2-resources-users-resources-response.js";
export {
  imsOnerosterRosteringV1P2AcademicSessionsRequestSchema,
  type ImsOnerosterRosteringV1P2AcademicSessionsRequest,
} from "./models/ims-oneroster-rostering-v1-p2-academic-sessions-request.js";
export {
  imsOnerosterRosteringV1P2AcademicSessionsResponseSchema,
  type ImsOnerosterRosteringV1P2AcademicSessionsResponse,
} from "./models/ims-oneroster-rostering-v1-p2-academic-sessions-response.js";
export {
  imsOnerosterRosteringV1P2AcademicSessionsResponse1Schema,
  type ImsOnerosterRosteringV1P2AcademicSessionsResponse1,
} from "./models/ims-oneroster-rostering-v1-p2-academic-sessions-response1.js";
export {
  imsOnerosterRosteringV1P2AcademicSessionsResponse2Schema,
  type ImsOnerosterRosteringV1P2AcademicSessionsResponse2,
} from "./models/ims-oneroster-rostering-v1-p2-academic-sessions-response2.js";
export {
  imsOnerosterRosteringV1P2ClassesRequestSchema,
  type ImsOnerosterRosteringV1P2ClassesRequest,
} from "./models/ims-oneroster-rostering-v1-p2-classes-request.js";
export {
  imsOnerosterRosteringV1P2ClassesRequest1Schema,
  type ImsOnerosterRosteringV1P2ClassesRequest1,
} from "./models/ims-oneroster-rostering-v1-p2-classes-request1.js";
export {
  imsOnerosterRosteringV1P2ClassesResponseSchema,
  type ImsOnerosterRosteringV1P2ClassesResponse,
} from "./models/ims-oneroster-rostering-v1-p2-classes-response.js";
export {
  imsOnerosterRosteringV1P2ClassesResponse1Schema,
  type ImsOnerosterRosteringV1P2ClassesResponse1,
} from "./models/ims-oneroster-rostering-v1-p2-classes-response1.js";
export {
  imsOnerosterRosteringV1P2ClassesResponse2Schema,
  type ImsOnerosterRosteringV1P2ClassesResponse2,
} from "./models/ims-oneroster-rostering-v1-p2-classes-response2.js";
export {
  imsOnerosterRosteringV1P2ClassesStudentsRequestSchema,
  type ImsOnerosterRosteringV1P2ClassesStudentsRequest,
} from "./models/ims-oneroster-rostering-v1-p2-classes-students-request.js";
export {
  imsOnerosterRosteringV1P2ClassesStudentsResponseSchema,
  type ImsOnerosterRosteringV1P2ClassesStudentsResponse,
} from "./models/ims-oneroster-rostering-v1-p2-classes-students-response.js";
export {
  imsOnerosterRosteringV1P2ClassesStudentsResponse1Schema,
  type ImsOnerosterRosteringV1P2ClassesStudentsResponse1,
} from "./models/ims-oneroster-rostering-v1-p2-classes-students-response1.js";
export {
  imsOnerosterRosteringV1P2ClassesTeachersRequestSchema,
  type ImsOnerosterRosteringV1P2ClassesTeachersRequest,
} from "./models/ims-oneroster-rostering-v1-p2-classes-teachers-request.js";
export {
  imsOnerosterRosteringV1P2ClassesTeachersResponseSchema,
  type ImsOnerosterRosteringV1P2ClassesTeachersResponse,
} from "./models/ims-oneroster-rostering-v1-p2-classes-teachers-response.js";
export {
  imsOnerosterRosteringV1P2ClassesTeachersResponse1Schema,
  type ImsOnerosterRosteringV1P2ClassesTeachersResponse1,
} from "./models/ims-oneroster-rostering-v1-p2-classes-teachers-response1.js";
export {
  imsOnerosterRosteringV1P2CoursesClassesResponseSchema,
  type ImsOnerosterRosteringV1P2CoursesClassesResponse,
} from "./models/ims-oneroster-rostering-v1-p2-courses-classes-response.js";
export {
  imsOnerosterRosteringV1P2CoursesComponentResourcesRequestSchema,
  type ImsOnerosterRosteringV1P2CoursesComponentResourcesRequest,
} from "./models/ims-oneroster-rostering-v1-p2-courses-component-resources-request.js";
export {
  imsOnerosterRosteringV1P2CoursesComponentResourcesResponseSchema,
  type ImsOnerosterRosteringV1P2CoursesComponentResourcesResponse,
} from "./models/ims-oneroster-rostering-v1-p2-courses-component-resources-response.js";
export {
  imsOnerosterRosteringV1P2CoursesComponentResourcesResponse1Schema,
  type ImsOnerosterRosteringV1P2CoursesComponentResourcesResponse1,
} from "./models/ims-oneroster-rostering-v1-p2-courses-component-resources-response1.js";
export {
  imsOnerosterRosteringV1P2CoursesComponentResourcesResponse2Schema,
  type ImsOnerosterRosteringV1P2CoursesComponentResourcesResponse2,
} from "./models/ims-oneroster-rostering-v1-p2-courses-component-resources-response2.js";
export {
  imsOnerosterRosteringV1P2CoursesComponentsRequestSchema,
  type ImsOnerosterRosteringV1P2CoursesComponentsRequest,
} from "./models/ims-oneroster-rostering-v1-p2-courses-components-request.js";
export {
  imsOnerosterRosteringV1P2CoursesComponentsResponseSchema,
  type ImsOnerosterRosteringV1P2CoursesComponentsResponse,
} from "./models/ims-oneroster-rostering-v1-p2-courses-components-response.js";
export {
  imsOnerosterRosteringV1P2CoursesComponentsResponse1Schema,
  type ImsOnerosterRosteringV1P2CoursesComponentsResponse1,
} from "./models/ims-oneroster-rostering-v1-p2-courses-components-response1.js";
export {
  imsOnerosterRosteringV1P2CoursesComponentsResponse2Schema,
  type ImsOnerosterRosteringV1P2CoursesComponentsResponse2,
} from "./models/ims-oneroster-rostering-v1-p2-courses-components-response2.js";
export {
  imsOnerosterRosteringV1P2CoursesRequestSchema,
  type ImsOnerosterRosteringV1P2CoursesRequest,
} from "./models/ims-oneroster-rostering-v1-p2-courses-request.js";
export {
  imsOnerosterRosteringV1P2CoursesResponseSchema,
  type ImsOnerosterRosteringV1P2CoursesResponse,
} from "./models/ims-oneroster-rostering-v1-p2-courses-response.js";
export {
  imsOnerosterRosteringV1P2CoursesResponse1Schema,
  type ImsOnerosterRosteringV1P2CoursesResponse1,
} from "./models/ims-oneroster-rostering-v1-p2-courses-response1.js";
export {
  imsOnerosterRosteringV1P2CoursesResponse2Schema,
  type ImsOnerosterRosteringV1P2CoursesResponse2,
} from "./models/ims-oneroster-rostering-v1-p2-courses-response2.js";
export {
  imsOnerosterRosteringV1P2DemographicsRequestSchema,
  type ImsOnerosterRosteringV1P2DemographicsRequest,
} from "./models/ims-oneroster-rostering-v1-p2-demographics-request.js";
export {
  imsOnerosterRosteringV1P2DemographicsResponseSchema,
  type ImsOnerosterRosteringV1P2DemographicsResponse,
} from "./models/ims-oneroster-rostering-v1-p2-demographics-response.js";
export {
  imsOnerosterRosteringV1P2DemographicsResponse1Schema,
  type ImsOnerosterRosteringV1P2DemographicsResponse1,
} from "./models/ims-oneroster-rostering-v1-p2-demographics-response1.js";
export {
  imsOnerosterRosteringV1P2DemographicsResponse2Schema,
  type ImsOnerosterRosteringV1P2DemographicsResponse2,
} from "./models/ims-oneroster-rostering-v1-p2-demographics-response2.js";
export {
  imsOnerosterRosteringV1P2EnrollmentsRequestSchema,
  type ImsOnerosterRosteringV1P2EnrollmentsRequest,
} from "./models/ims-oneroster-rostering-v1-p2-enrollments-request.js";
export {
  imsOnerosterRosteringV1P2EnrollmentsRequest1Schema,
  type ImsOnerosterRosteringV1P2EnrollmentsRequest1,
} from "./models/ims-oneroster-rostering-v1-p2-enrollments-request1.js";
export {
  imsOnerosterRosteringV1P2EnrollmentsResponseSchema,
  type ImsOnerosterRosteringV1P2EnrollmentsResponse,
} from "./models/ims-oneroster-rostering-v1-p2-enrollments-response.js";
export {
  imsOnerosterRosteringV1P2EnrollmentsResponse1Schema,
  type ImsOnerosterRosteringV1P2EnrollmentsResponse1,
} from "./models/ims-oneroster-rostering-v1-p2-enrollments-response1.js";
export {
  imsOnerosterRosteringV1P2EnrollmentsResponse2Schema,
  type ImsOnerosterRosteringV1P2EnrollmentsResponse2,
} from "./models/ims-oneroster-rostering-v1-p2-enrollments-response2.js";
export {
  imsOnerosterRosteringV1P2GradingPeriodsRequestSchema,
  type ImsOnerosterRosteringV1P2GradingPeriodsRequest,
} from "./models/ims-oneroster-rostering-v1-p2-grading-periods-request.js";
export {
  imsOnerosterRosteringV1P2GradingPeriodsResponseSchema,
  type ImsOnerosterRosteringV1P2GradingPeriodsResponse,
} from "./models/ims-oneroster-rostering-v1-p2-grading-periods-response.js";
export {
  imsOnerosterRosteringV1P2GradingPeriodsResponse1Schema,
  type ImsOnerosterRosteringV1P2GradingPeriodsResponse1,
} from "./models/ims-oneroster-rostering-v1-p2-grading-periods-response1.js";
export {
  imsOnerosterRosteringV1P2GradingPeriodsResponse2Schema,
  type ImsOnerosterRosteringV1P2GradingPeriodsResponse2,
} from "./models/ims-oneroster-rostering-v1-p2-grading-periods-response2.js";
export {
  imsOnerosterRosteringV1P2OrgsRequestSchema,
  type ImsOnerosterRosteringV1P2OrgsRequest,
} from "./models/ims-oneroster-rostering-v1-p2-orgs-request.js";
export {
  imsOnerosterRosteringV1P2OrgsResponseSchema,
  type ImsOnerosterRosteringV1P2OrgsResponse,
} from "./models/ims-oneroster-rostering-v1-p2-orgs-response.js";
export {
  imsOnerosterRosteringV1P2OrgsResponse1Schema,
  type ImsOnerosterRosteringV1P2OrgsResponse1,
} from "./models/ims-oneroster-rostering-v1-p2-orgs-response1.js";
export {
  imsOnerosterRosteringV1P2OrgsResponse2Schema,
  type ImsOnerosterRosteringV1P2OrgsResponse2,
} from "./models/ims-oneroster-rostering-v1-p2-orgs-response2.js";
export {
  imsOnerosterRosteringV1P2SchoolsClassesEnrollmentsResponseSchema,
  type ImsOnerosterRosteringV1P2SchoolsClassesEnrollmentsResponse,
} from "./models/ims-oneroster-rostering-v1-p2-schools-classes-enrollments-response.js";
export {
  imsOnerosterRosteringV1P2SchoolsClassesResponseSchema,
  type ImsOnerosterRosteringV1P2SchoolsClassesResponse,
} from "./models/ims-oneroster-rostering-v1-p2-schools-classes-response.js";
export {
  imsOnerosterRosteringV1P2SchoolsClassesStudentsResponseSchema,
  type ImsOnerosterRosteringV1P2SchoolsClassesStudentsResponse,
} from "./models/ims-oneroster-rostering-v1-p2-schools-classes-students-response.js";
export {
  imsOnerosterRosteringV1P2SchoolsClassesTeachersResponseSchema,
  type ImsOnerosterRosteringV1P2SchoolsClassesTeachersResponse,
} from "./models/ims-oneroster-rostering-v1-p2-schools-classes-teachers-response.js";
export {
  imsOnerosterRosteringV1P2SchoolsCoursesResponseSchema,
  type ImsOnerosterRosteringV1P2SchoolsCoursesResponse,
} from "./models/ims-oneroster-rostering-v1-p2-schools-courses-response.js";
export {
  imsOnerosterRosteringV1P2SchoolsEnrollmentsResponseSchema,
  type ImsOnerosterRosteringV1P2SchoolsEnrollmentsResponse,
} from "./models/ims-oneroster-rostering-v1-p2-schools-enrollments-response.js";
export {
  imsOnerosterRosteringV1P2SchoolsRequestSchema,
  type ImsOnerosterRosteringV1P2SchoolsRequest,
} from "./models/ims-oneroster-rostering-v1-p2-schools-request.js";
export {
  imsOnerosterRosteringV1P2SchoolsResponseSchema,
  type ImsOnerosterRosteringV1P2SchoolsResponse,
} from "./models/ims-oneroster-rostering-v1-p2-schools-response.js";
export {
  imsOnerosterRosteringV1P2SchoolsResponse1Schema,
  type ImsOnerosterRosteringV1P2SchoolsResponse1,
} from "./models/ims-oneroster-rostering-v1-p2-schools-response1.js";
export {
  imsOnerosterRosteringV1P2SchoolsStudentsResponseSchema,
  type ImsOnerosterRosteringV1P2SchoolsStudentsResponse,
} from "./models/ims-oneroster-rostering-v1-p2-schools-students-response.js";
export {
  imsOnerosterRosteringV1P2SchoolsTeachersResponseSchema,
  type ImsOnerosterRosteringV1P2SchoolsTeachersResponse,
} from "./models/ims-oneroster-rostering-v1-p2-schools-teachers-response.js";
export {
  imsOnerosterRosteringV1P2SchoolsTermsResponseSchema,
  type ImsOnerosterRosteringV1P2SchoolsTermsResponse,
} from "./models/ims-oneroster-rostering-v1-p2-schools-terms-response.js";
export {
  imsOnerosterRosteringV1P2StudentsClassesResponseSchema,
  type ImsOnerosterRosteringV1P2StudentsClassesResponse,
} from "./models/ims-oneroster-rostering-v1-p2-students-classes-response.js";
export {
  imsOnerosterRosteringV1P2StudentsResponseSchema,
  type ImsOnerosterRosteringV1P2StudentsResponse,
} from "./models/ims-oneroster-rostering-v1-p2-students-response.js";
export {
  imsOnerosterRosteringV1P2StudentsResponse1Schema,
  type ImsOnerosterRosteringV1P2StudentsResponse1,
} from "./models/ims-oneroster-rostering-v1-p2-students-response1.js";
export {
  imsOnerosterRosteringV1P2TeachersClassesResponseSchema,
  type ImsOnerosterRosteringV1P2TeachersClassesResponse,
} from "./models/ims-oneroster-rostering-v1-p2-teachers-classes-response.js";
export {
  imsOnerosterRosteringV1P2TeachersResponseSchema,
  type ImsOnerosterRosteringV1P2TeachersResponse,
} from "./models/ims-oneroster-rostering-v1-p2-teachers-response.js";
export {
  imsOnerosterRosteringV1P2TeachersResponse1Schema,
  type ImsOnerosterRosteringV1P2TeachersResponse1,
} from "./models/ims-oneroster-rostering-v1-p2-teachers-response1.js";
export {
  imsOnerosterRosteringV1P2TermsClassesResponseSchema,
  type ImsOnerosterRosteringV1P2TermsClassesResponse,
} from "./models/ims-oneroster-rostering-v1-p2-terms-classes-response.js";
export {
  imsOnerosterRosteringV1P2TermsGradingPeriodsRequestSchema,
  type ImsOnerosterRosteringV1P2TermsGradingPeriodsRequest,
} from "./models/ims-oneroster-rostering-v1-p2-terms-grading-periods-request.js";
export {
  imsOnerosterRosteringV1P2TermsGradingPeriodsResponseSchema,
  type ImsOnerosterRosteringV1P2TermsGradingPeriodsResponse,
} from "./models/ims-oneroster-rostering-v1-p2-terms-grading-periods-response.js";
export {
  imsOnerosterRosteringV1P2TermsGradingPeriodsResponse1Schema,
  type ImsOnerosterRosteringV1P2TermsGradingPeriodsResponse1,
} from "./models/ims-oneroster-rostering-v1-p2-terms-grading-periods-response1.js";
export {
  imsOnerosterRosteringV1P2TermsResponseSchema,
  type ImsOnerosterRosteringV1P2TermsResponse,
} from "./models/ims-oneroster-rostering-v1-p2-terms-response.js";
export {
  imsOnerosterRosteringV1P2TermsResponse1Schema,
  type ImsOnerosterRosteringV1P2TermsResponse1,
} from "./models/ims-oneroster-rostering-v1-p2-terms-response1.js";
export {
  imsOnerosterRosteringV1P2UsersClassesResponseSchema,
  type ImsOnerosterRosteringV1P2UsersClassesResponse,
} from "./models/ims-oneroster-rostering-v1-p2-users-classes-response.js";
export {
  imsOnerosterRosteringV1P2UsersDemographicsResponseSchema,
  type ImsOnerosterRosteringV1P2UsersDemographicsResponse,
} from "./models/ims-oneroster-rostering-v1-p2-users-demographics-response.js";
export {
  imsOnerosterRosteringV1P2UsersRequestSchema,
  type ImsOnerosterRosteringV1P2UsersRequest,
} from "./models/ims-oneroster-rostering-v1-p2-users-request.js";
export {
  imsOnerosterRosteringV1P2UsersResponseSchema,
  type ImsOnerosterRosteringV1P2UsersResponse,
} from "./models/ims-oneroster-rostering-v1-p2-users-response.js";
export {
  imsOnerosterRosteringV1P2UsersResponse1Schema,
  type ImsOnerosterRosteringV1P2UsersResponse1,
} from "./models/ims-oneroster-rostering-v1-p2-users-response1.js";
export { imsxCodeMinorSchema, type ImsxCodeMinor } from "./models/imsx-code-minor.js";
export { imsxCodeMinorFieldSchema, type ImsxCodeMinorField } from "./models/imsx-code-minor-field.js";
export {
  internalServerErrorResponseSchema,
  type InternalServerErrorResponse,
} from "./models/internal-server-error-response.js";
export {
  internalServerErrorResponseErrorSchema,
  type InternalServerErrorResponseError,
} from "./models/internal-server-error-response-error.js";
export {
  learningObjectiveResultSchema,
  type LearningObjectiveResult,
} from "./models/learning-objective-result.js";
export { learningObjectiveSetSchema, type LearningObjectiveSet } from "./models/learning-objective-set.js";
export { learningObjectiveSet1Schema, type LearningObjectiveSet1 } from "./models/learning-objective-set1.js";
export { lineItemSchema, type LineItem } from "./models/line-item.js";
export { lineItem1Schema, type LineItem1 } from "./models/line-item1.js";
export { metadataSchema, type Metadata } from "./models/metadata.js";
export {
  NativeHawaiianOrOtherPacificIslander,
  nativeHawaiianOrOtherPacificIslanderSchema,
} from "./models/native-hawaiian-or-other-pacific-islander.js";
export { notFoundResponseSchema, type NotFoundResponse } from "./models/not-found-response.js";
export {
  notFoundResponseErrorSchema,
  type NotFoundResponseError,
} from "./models/not-found-response-error.js";
export { onboardingSchema, type Onboarding } from "./models/onboarding.js";
export { onboarding1Schema, type Onboarding1 } from "./models/unions/onboarding1.js";
export { onboarding2Schema, type Onboarding2 } from "./models/onboarding2.js";
export { orgSchema, type Org } from "./models/org.js";
export { org1Schema, type Org1 } from "./models/org1.js";
export { org26Schema, type Org26 } from "./models/org26.js";
export { org3Schema, type Org3 } from "./models/org3.js";
export { org5Schema, type Org5 } from "./models/org5.js";
export { org6Schema, type Org6 } from "./models/org6.js";
export { parentSchema, type Parent } from "./models/parent.js";
export { parent1Schema, type Parent1 } from "./models/parent1.js";
export { parent3Schema, type Parent3 } from "./models/parent3.js";
export {
  parentAssessmentLineItemSchema,
  type ParentAssessmentLineItem,
} from "./models/parent-assessment-line-item.js";
export { primaryOrgSchema, type PrimaryOrg } from "./models/primary-org.js";
export { primaryOrg1Schema, type PrimaryOrg1 } from "./models/primary-org1.js";
export { resourceSchema, type Resource } from "./models/resource.js";
export { resource1Schema, type Resource1 } from "./models/resource1.js";
export { resource3Schema, type Resource3 } from "./models/resource3.js";
export { resource7Schema, type Resource7 } from "./models/resource7.js";
export { resultSchema, type Result } from "./models/result.js";
export { Role, roleSchema } from "./models/role.js";
export { Role1, role1Schema } from "./models/role1.js";
export { role10Schema, type Role10 } from "./models/role10.js";
export { role8Schema, type Role8 } from "./models/role8.js";
export { Role9, role9Schema } from "./models/role9.js";
export { RoleType, roleTypeSchema } from "./models/role-type.js";
export { schoolSchema, type School } from "./models/school.js";
export { school1Schema, type School1 } from "./models/school1.js";
export { scoreScaleSchema, type ScoreScale } from "./models/score-scale.js";
export { scoreScale1Schema, type ScoreScale1 } from "./models/score-scale1.js";
export { scoreScale4Schema, type ScoreScale4 } from "./models/score-scale4.js";
export { scoreScaleValueSchema, type ScoreScaleValue } from "./models/score-scale-value.js";
export { ScoreStatus, scoreStatusSchema } from "./models/score-status.js";
export { Sex, sexSchema } from "./models/sex.js";
export { Sex2, sex2Schema } from "./models/sex2.js";
export { sourcedIdPairsSchema, type SourcedIdPairs } from "./models/sourced-id-pairs.js";
export { Status, statusSchema } from "./models/status.js";
export { studentSchema, type Student } from "./models/student.js";
export { student7Schema, type Student7 } from "./models/student7.js";
export { teacherSchema, type Teacher } from "./models/teacher.js";
export { termSchema, type Term } from "./models/term.js";
export { term2Schema, type Term2 } from "./models/term2.js";
export {
  tooManyRequestsResponseSchema,
  type TooManyRequestsResponse,
} from "./models/too-many-requests-response.js";
export {
  tooManyRequestsResponseErrorSchema,
  type TooManyRequestsResponseError,
} from "./models/too-many-requests-response-error.js";
export { Type, typeSchema } from "./models/type.js";
export { Type1, type1Schema } from "./models/type1.js";
export { Type2, type2Schema } from "./models/type2.js";
export {
  unauthorizedRequestResponseSchema,
  type UnauthorizedRequestResponse,
} from "./models/unauthorized-request-response.js";
export {
  unauthorizedRequestResponseErrorSchema,
  type UnauthorizedRequestResponseError,
} from "./models/unauthorized-request-response-error.js";
export {
  unprocessableEntityResponseSchema,
  type UnprocessableEntityResponse,
} from "./models/unprocessable-entity-response.js";
export {
  unprocessableEntityResponseErrorSchema,
  type UnprocessableEntityResponseError,
} from "./models/unprocessable-entity-response-error.js";
export { userSchema, type User } from "./models/user.js";
export { user1Schema, type User1 } from "./models/user1.js";
export { user2Schema, type User2 } from "./models/user2.js";
export { user8Schema, type User8 } from "./models/user8.js";
export { userIdSchema, type UserId } from "./models/user-id.js";
export { White, whiteSchema } from "./models/white.js";
export { OrderBy, orderBySchema } from "./models/order-by.js";

export {
  CoreError as OneRosterApiError,
  ResponseError,
  DecodeError,
  EncodeError,
  ConnectionError,
  TimeoutError,
  AuthError,
  ConfigurationError,
} from "./core/errors.js";
export { ApiError } from "./core/api-error.js";
export { SchemaError } from "./core/validation/schema-error.js";
export {
  defaultLoggingOptions,
  type LoggingOptions,
  type RequestLoggingOptions,
  type Logger,
  type LogDetails,
  type HttpRequestDetails,
  type RequestHeadersDetails,
  type RequestBodyDetails,
  type HttpResponseDetails,
  type ResponseHeadersDetails,
  type HttpRetryingDetails,
  type HttpFailedDetails,
  type LogLevel,
} from "./core/logging.js";
export type { ApiPromise, ApiResult } from "./core/api-promise.js";
export type { HttpMethod, RequestOptions } from "./core/api-request.js";
export type { RetryOptions, RequestRetryOptions, RetryAttempt, RetryReason } from "./core/retry.js";
export type { BinaryContent, BinaryData, BinaryErrorContent, FileData, FileInput } from "./core/binary.js";
export type { ErrorKind } from "./core/errors.js";
export type { Declared, Undeclared } from "./core/api-error.js";
export type { Schema, EnumSchema, Encoded } from "./core/validation/schema.js";
