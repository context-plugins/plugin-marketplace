import { buildAuthSchemes, type AuthSchemes } from "./auth-schemes.js";
import type { ClientOptions } from "./client-options.js";
import { buildCoreClientOptions } from "./core/client-options.js";
import { RawClient } from "./core/raw-client.js";
import * as host from "./core/runtime-environment.js";
import * as s from "./core/validation/index.js";
import { AcademicSessionsManagement } from "./resources/academic-sessions-management.js";
import { AssessmentLineItemsManagement } from "./resources/assessment-line-items-management.js";
import { AssessmentResultsManagement } from "./resources/assessment-results-management.js";
import { CategoriesManagement } from "./resources/categories-management.js";
import { ClassesManagement } from "./resources/classes-management.js";
import { CourseComponentResourcesManagement } from "./resources/course-component-resources-management.js";
import { CourseComponentsManagement } from "./resources/course-components-management.js";
import { CoursesManagement } from "./resources/courses-management.js";
import { DemographicsManagement } from "./resources/demographics-management.js";
import { EnrollmentsManagement } from "./resources/enrollments-management.js";
import { GradingPeriodsManagement } from "./resources/grading-periods-management.js";
import { LineItemsManagement } from "./resources/line-items-management.js";
import { OrganizationsManagement } from "./resources/organizations-management.js";
import { ResourcesManagement } from "./resources/resources-management.js";
import { ResultsManagement } from "./resources/results-management.js";
import { SchoolsManagement } from "./resources/schools-management.js";
import { ScoreScalesManagement } from "./resources/score-scales-management.js";
import { StudentsManagement } from "./resources/students-management.js";
import { TeachersManagement } from "./resources/teachers-management.js";
import { TermsManagement } from "./resources/terms-management.js";
import { UsersManagement } from "./resources/users-management.js";
import { buildServers, type Servers } from "./servers.js";

/**
 * # Authentication
 *
 * All endpoints require authentication using the `Authorization: Bearer <token>` header.
 *
 * The token can be obtained with:
 *
 * ```
 * curl -X POST https://alpha-auth-production-idp.auth.us-west-2.amazoncognito.com/oauth2/token \
 * -H "Content-Type: application/x-www-form-urlencoded" \
 * -d "grant_type=client_credentials&client_id=<your-client-id>&client_secret=<your-client-secret>"
 * ```
 *
 * Use the correct IDP server depending on the environment you're using:
 *
 * - Production Server: https://alpha-auth-production-idp.auth.us-west-2.amazoncognito.com
 * - Staging Server: https://alpha-auth-development-idp.auth.us-west-2.amazoncognito.com
 *
 * Reach out to the platform team to get a client/secret pair for your application.
 *
 * # Pagination
 *
 * Our API uses offset pagination for list endpoints. Paginated responses include the following
 * fields:
 *
 * - `offset`: Offset for the next page of results
 * - `limit`: Number of items per page (default: 100)
 *
 * Example request:
 *
 * ```
 * GET /ims/oneroster/rostering/v1p2/users?offset=20&limit=20
 * ```
 *
 * All listing endpoints support offset pagination.
 *
 * # Filtering
 *
 * All listing endpoints support filtering using the `filter` query parameter, following 1EdTech's
 * filtering specification.
 *
 * The filter should be a string with the following format:
 *
 * ```
 * ?filter=[field][operator][value]
 * ```
 *
 * Example request:
 *
 * ```
 * GET /ims/oneroster/rostering/v1p2/users?filter=status='active'
 * ```
 *
 * Example request with multiple filters:
 *
 * ```
 * GET /ims/oneroster/rostering/v1p2/users?filter=status='active' AND name='John'
 * ```
 *
 * **Filtering by nested relations is not supported**.
 *
 * # Sorting
 *
 * All listing endpoints support sorting using the `sort` and `orderBy` query parameters, following
 * 1EdTech's sorting specification
 *
 * Example request:
 *
 * ```
 * GET /ims/oneroster/rostering/v1p2/users?sort=lastName&orderBy=asc
 * ```
 */
export class OneRosterApiClient {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;
  #academicSessionsManagement?: AcademicSessionsManagement;
  #assessmentLineItemsManagement?: AssessmentLineItemsManagement;
  #assessmentResultsManagement?: AssessmentResultsManagement;
  #categoriesManagement?: CategoriesManagement;
  #classesManagement?: ClassesManagement;
  #teachersManagement?: TeachersManagement;
  #studentsManagement?: StudentsManagement;
  #coursesManagement?: CoursesManagement;
  #courseComponentResourcesManagement?: CourseComponentResourcesManagement;
  #courseComponentsManagement?: CourseComponentsManagement;
  #demographicsManagement?: DemographicsManagement;
  #enrollmentsManagement?: EnrollmentsManagement;
  #gradingPeriodsManagement?: GradingPeriodsManagement;
  #lineItemsManagement?: LineItemsManagement;
  #organizationsManagement?: OrganizationsManagement;
  #resourcesManagement?: ResourcesManagement;
  #resultsManagement?: ResultsManagement;
  #schoolsManagement?: SchoolsManagement;
  #scoreScalesManagement?: ScoreScalesManagement;
  #termsManagement?: TermsManagement;
  #usersManagement?: UsersManagement;

  constructor(options: ClientOptions = {}) {
    this.#rawClient = new RawClient({
      ...buildCoreClientOptions(options, "ONE_ROSTER_API_CLIENT_LOG"),
      defaultHeaders: [
        { name: "User-Agent", value: "OneRosterApiClient/1.0.0 TypeScript", schema: s.string() },
        { name: "X-APIMatic-Lang", value: "TypeScript", schema: s.string() },
        { name: "X-APIMatic-Package-Version", value: "1.0.0", schema: s.string() },
        { name: "X-APIMatic-Gen-Version", value: "4.0.0", schema: s.string() },
        { name: "X-APIMatic-OS", value: host.operatingSystem(), schema: s.optional(s.string()) },
        { name: "X-APIMatic-Runtime", value: host.runtimeDescription(), schema: s.optional(s.string()) },
      ],
      defaultQuery: [],
      defaultPathParams: [],
    });

    this.#servers = buildServers(options);

    this.#auth = buildAuthSchemes(options, this.#servers, this.#rawClient);
  }

  /**
   * This enables the management of academic sessions i.e. periods of academic activity such as
   * terms, semesters, grading periods, and school years. Academic sessions can have hierarchical
   * relationships (e.g., a school year containing terms, terms containing grading periods).
   */
  get academicSessionsManagement(): AcademicSessionsManagement {
    return (this.#academicSessionsManagement ??= new AcademicSessionsManagement(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  /**
   * This enables the management of the assessment line items i.e. line items that are used to store
   * results about tests/assessments and where these test/assessments are not aligned to a class.
   */
  get assessmentLineItemsManagement(): AssessmentLineItemsManagement {
    return (this.#assessmentLineItemsManagement ??= new AssessmentLineItemsManagement(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  /**
   * This enables the management of the assessment results i.e. results that are used to store
   * scores for tests/assessments and where these test/assessments are not aligned to a class.
   */
  get assessmentResultsManagement(): AssessmentResultsManagement {
    return (this.#assessmentResultsManagement ??= new AssessmentResultsManagement(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  /**
   * This enables the management of Categories i.e. collections of LineItems.
   */
  get categoriesManagement(): CategoriesManagement {
    return (this.#categoriesManagement ??= new CategoriesManagement(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  /**
   * This enables the management of classes i.e. scheduled learning of courses, with respect to
   * academic sessions.
   */
  get classesManagement(): ClassesManagement {
    return (this.#classesManagement ??= new ClassesManagement(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * This enables the management of information about teachers (a teacher is a type of 'user').
   */
  get teachersManagement(): TeachersManagement {
    return (this.#teachersManagement ??= new TeachersManagement(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * This enables the management of information about students (a student is a type of 'user').
   */
  get studentsManagement(): StudentsManagement {
    return (this.#studentsManagement ??= new StudentsManagement(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * This enables the management of Courses i.e. programme of study.
   */
  get coursesManagement(): CoursesManagement {
    return (this.#coursesManagement ??= new CoursesManagement(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * This enables the management of Course Component Resources i.e. resources for a course
   * component.
   */
  get courseComponentResourcesManagement(): CourseComponentResourcesManagement {
    return (this.#courseComponentResourcesManagement ??= new CourseComponentResourcesManagement(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  /**
   * This enables the management of Course Components i.e. components of a course.
   */
  get courseComponentsManagement(): CourseComponentsManagement {
    return (this.#courseComponentsManagement ??= new CourseComponentsManagement(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  /**
   * This enables the management of demographics information (each assigned to a specific user). The
   * sourcedIds for the user and the demographics records should be the same.
   */
  get demographicsManagement(): DemographicsManagement {
    return (this.#demographicsManagement ??= new DemographicsManagement(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  /**
   * This enables the management of the enrollments of users (teachers, students, etc.) on classes
   * supplied by schools.
   */
  get enrollmentsManagement(): EnrollmentsManagement {
    return (this.#enrollmentsManagement ??= new EnrollmentsManagement(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  /**
   * This enables the management of grading periods i.e. specific academic sessions.
   */
  get gradingPeriodsManagement(): GradingPeriodsManagement {
    return (this.#gradingPeriodsManagement ??= new GradingPeriodsManagement(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  /**
   * This enables the management of lineItems i.e. the set of results for the assessment of some
   * activity.
   */
  get lineItemsManagement(): LineItemsManagement {
    return (this.#lineItemsManagement ??= new LineItemsManagement(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  /**
   * This enables the management of orgs i.e. an organization involved in the learning in some form
   * or other.
   */
  get organizationsManagement(): OrganizationsManagement {
    return (this.#organizationsManagement ??= new OrganizationsManagement(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  /**
   * This enables the management of resources
   */
  get resourcesManagement(): ResourcesManagement {
    return (this.#resourcesManagement ??= new ResourcesManagement(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  /**
   * This enables the management of results i.e. the score allocated to a learner from the assessent
   * of a learning activity. Results are collected as a set of 'lineItems'.
   */
  get resultsManagement(): ResultsManagement {
    return (this.#resultsManagement ??= new ResultsManagement(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * This enables the management of information about schools. A school is a type of 'org'.
   */
  get schoolsManagement(): SchoolsManagement {
    return (this.#schoolsManagement ??= new SchoolsManagement(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * This enables the management of scoreScales i.e. the set of scales for the results and
   * lineItems.
   */
  get scoreScalesManagement(): ScoreScalesManagement {
    return (this.#scoreScalesManagement ??= new ScoreScalesManagement(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  /**
   * This enables the management of information about terms (a term is a type of 'academicSession').
   */
  get termsManagement(): TermsManagement {
    return (this.#termsManagement ??= new TermsManagement(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * This enables the management of information about users (including students and teachers).
   */
  get usersManagement(): UsersManagement {
    return (this.#usersManagement ??= new UsersManagement(this.#rawClient, this.#servers, this.#auth));
  }
}
