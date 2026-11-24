from __future__ import annotations

from uuid import UUID, uuid4

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    AnySchemes,
    ApiResult,
    AsyncAnySchemes,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    RawClient,
    RawError,
    RequestOptionsOrDict,
    SecuredRawResponse,
    async_empty_response,
    async_json_decoder,
    empty_response,
    json_body,
    json_decoder,
    param,
    raw_error_response,
    unwrap,
)
from ..errors.create_or_update_annotation2_error import (
    CreateOrUpdateAnnotation2ErrorBody,
    create_or_update_annotation2_error_mapper,
)
from ..errors.create_or_update_report2_error import (
    CreateOrUpdateReport2ErrorBody,
    create_or_update_report2_error_mapper,
)
from ..errors.get_annotation2_error import GetAnnotation2ErrorBody, get_annotation2_error_mapper
from ..errors.get_report2_error import GetReport2ErrorBody, get_report2_error_mapper
from ..models.paginated_annotations import PaginatedAnnotations
from ..models.paginated_reports import PaginatedReports
from ..models.report_annotation_bitbucket_reports_api import (
    ReportAnnotationBitbucketReportsApi,
    ReportAnnotationBitbucketReportsApiDict,
)
from ..models.report_bitbucket_reports_api import ReportBitbucketReportsApi, ReportBitbucketReportsApiDict
from ..server.server import Server


class Reports:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = ReportsWithRawResponse(client, server, auth)

    def bulk_create_or_update_annotations2(
        self,
        workspace: str,
        repo_slug: str,
        commit: str,
        report_id: str,
        body: list[ReportAnnotationBitbucketReportsApi | ReportAnnotationBitbucketReportsApiDict],
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> list[ReportAnnotationBitbucketReportsApi]:
        r"""Bulk upload of annotations. Annotations are individual findings that have been identified as part of a
        report, for example, a line of code that represents a vulnerability. These annotations can be attached to a
        specific file and even a specific line in that file, however, that is optional. Annotations are not mandatory
        and a report can contain up to 1000 annotations.

        Add the annotations you want to upload as objects in a JSON array and make sure each annotation has the
        external_id field set to a unique value. If you want to use an existing id from your own system, we recommend
        prefixing it with your system's name to avoid collisions, for example, mySystem-annotation001. The external id
        can later be used to identify the report as an alternative to the generated UUID. You can upload up to 100
        annotations per POST request.

        ### Sample cURL request:
        ```
        curl --location 'https://api.bitbucket.org/2.0/repositories///commit//reports/mysystem-001/annotations' \
        --header 'Content-Type: application/json' \ --data-raw '[
        {
        "external_id": "mysystem-annotation001", "title": "Security scan report", "annotation_type": "VULNERABILITY",
        "summary": "This line represents a security threat.", "severity": "HIGH", "path":
        "my-service/src/main/java/com/myCompany/mysystem/logic/Main.java", "line": 42
        },
        {
        "external_id": "mySystem-annotation002", "title": "Bug report", "annotation_type": "BUG", "result": "FAILED",
        "summary": "This line might introduce a bug.", "severity": "MEDIUM", "path":
        "my-service/src/main/java/com/myCompany/mysystem/logic/Helper.java", "line": 13
        }
        ]'
        ```

        ### Possible field values: annotation_type: VULNERABILITY, CODE_SMELL, BUG result: PASSED, FAILED, IGNORED,
        SKIPPED severity: HIGH, MEDIUM, LOW, CRITICAL

        Please refer to the Code Insights documentation for more information.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            repo_slug: The repository.
            commit: The commit for which to retrieve reports.
            report_id: Uuid or external-if of the report for which to get annotations for.
            body: The annotations to create or update
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.bulk_create_or_update_annotations2(
                workspace, repo_slug, commit, report_id, body, request_options=request_options
            ),
        )

    def create_or_update_annotation2(
        self,
        workspace: str,
        repo_slug: str,
        commit: str,
        report_id: str,
        annotation_id: str,
        body: ReportAnnotationBitbucketReportsApi | ReportAnnotationBitbucketReportsApiDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ReportAnnotationBitbucketReportsApi:
        r"""Creates or updates an individual annotation for the specified report. Annotations are individual findings
        that have been identified as part of a report, for example, a line of code that represents a vulnerability.
        These annotations can be attached to a specific file and even a specific line in that file, however, that is
        optional. Annotations are not mandatory and a report can contain up to 1000 annotations.

        Just as reports, annotation needs to be uploaded with a unique ID that can later be used to identify the report
        as an alternative to the generated UUID. If you want to use an existing id from your own system, we recommend
        prefixing it with your system's name to avoid collisions, for example, mySystem-annotation001.

        ### Sample cURL request:
        ```
        curl --request PUT
        'https://api.bitbucket.org/2.0/repositories///commit//reports/mySystem-001/annotations/mysystem-annotation001' \
        --header 'Content-Type: application/json' \ --data-raw '{ "title": "Security scan report", "annotation_type":
        "VULNERABILITY", "summary": "This line represents a security thread.", "severity": "HIGH", "path":
        "my-service/src/main/java/com/myCompany/mysystem/logic/Main.java", "line": 42
        }'
        ```

        ### Possible field values: annotation_type: VULNERABILITY, CODE_SMELL, BUG result: PASSED, FAILED, IGNORED,
        SKIPPED severity: HIGH, MEDIUM, LOW, CRITICAL

        Please refer to the Code Insights documentation for more information.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            repo_slug: The repository.
            commit: The commit the report belongs to.
            report_id: Either the uuid or external-id of the report.
            annotation_id: Either the uuid or external-id of the annotation.
            body: The annotation to create or update
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: The provided Annotation object is malformed or incomplete. ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.create_or_update_annotation2(
                workspace, repo_slug, commit, report_id, annotation_id, body, request_options=request_options
            ),
        )

    def create_or_update_report2(
        self,
        workspace: str,
        repo_slug: str,
        commit: str,
        report_id: str,
        body: ReportBitbucketReportsApi | ReportBitbucketReportsApiDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ReportBitbucketReportsApi:
        r"""Creates or updates a report for the specified commit. To upload a report, make sure to generate an ID that
        is unique across all reports for that commit. If you want to use an existing id from your own system, we
        recommend prefixing it with your system's name to avoid collisions, for example, mySystem-001.

        ### Sample cURL request:
        ```
        curl --request PUT 'https://api.bitbucket.org/2.0/repositories///commit//reports/mysystem-001' \ --header
        'Content-Type: application/json' \ --data-raw '{ "title": "Security scan report", "details": "This pull request
        introduces 10 new dependency vulnerabilities.", "report_type": "SECURITY", "reporter": "mySystem", "link":
        "http://www.mysystem.com/reports/001", "result": "FAILED", "data": [
        {
        "title": "Duration (seconds)", "type": "DURATION", "value": 14
        },
        {
        "title": "Safe to merge?", "type": "BOOLEAN", "value": false
        }
        ]
        }'
        ```

        ### Possible field values: report_type: SECURITY, COVERAGE, TEST, BUG result: PASSED, FAILED, PENDING data.type:
        BOOLEAN, DATE, DURATION, LINK, NUMBER, PERCENTAGE, TEXT

        #### Data field formats
        | Type Field | Value Field Type | Value Field Display |
        |:--------------|:------------------|:--------------------|
        | None/ Omitted | Number, String or Boolean (not an array or object) | Plain text |
        | BOOLEAN | Boolean | The value will be read as a JSON boolean and displayed as 'Yes' or 'No'. |
        | DATE | Number | The value will be read as a JSON number in the form of a Unix timestamp (milliseconds) and
            will be displayed as a relative date if the date is less than one week ago, otherwise it will be displayed
            as an absolute date. |
        | DURATION | Number | The value will be read as a JSON number in milliseconds and will be displayed in a human
            readable duration format. |
        | LINK | Object: ``{"text": "Link text here", "href": "https://link.to.annotation/in/external/tool"}`` | The
            value will be read as a JSON object containing the fields "text" and "href" and will be displayed as a
            clickable link on the report. |
        | NUMBER | Number | The value will be read as a JSON number and large numbers will be displayed in a human
            readable format (e.g. 14.3k). |
        | PERCENTAGE | Number (between 0 and 100) | The value will be read as a JSON number between 0 and 100 and will
            be displayed with a percentage sign. |
        | TEXT | String | The value will be read as a JSON string and will be displayed as-is |

        Please refer to the Code Insights documentation for more information.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            repo_slug: The repository.
            commit: The commit the report belongs to.
            report_id: Either the uuid or external-id of the report.
            body: The report to create or update
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: The provided Report object is malformed or incomplete. ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.create_or_update_report2(
                workspace, repo_slug, commit, report_id, body, request_options=request_options
            ),
        )

    def delete_annotation2(
        self,
        workspace: str,
        repo_slug: str,
        commit: str,
        report_id: str,
        annotation_id: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Deletes a single Annotation matching the provided ID.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            repo_slug: The repository.
            commit: The commit the annotation belongs to.
            report_id: Either the uuid or external-id of the annotation.
            annotation_id: Either the uuid or external-id of the annotation.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            No content

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.delete_annotation2(
                workspace, repo_slug, commit, report_id, annotation_id, request_options=request_options
            ),
        )

    def delete_report2(
        self,
        workspace: str,
        repo_slug: str,
        commit: str,
        report_id: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Deletes a single Report matching the provided ID.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            repo_slug: The repository.
            commit: The commit the report belongs to.
            report_id: Either the uuid or external-id of the report.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            No content

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.delete_report2(
                workspace, repo_slug, commit, report_id, request_options=request_options
            ),
        )

    def get_annotation2(
        self,
        workspace: str,
        repo_slug: str,
        commit: str,
        report_id: str,
        annotation_id: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ReportAnnotationBitbucketReportsApi:
        """Returns a single Annotation matching the provided ID.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            repo_slug: The repository.
            commit: The commit the report belongs to.
            report_id: Either the uuid or external-id of the report.
            annotation_id: Either the uuid or external-id of the annotation.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: The annotation with the given ID was not found. ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.get_annotation2(
                workspace, repo_slug, commit, report_id, annotation_id, request_options=request_options
            ),
        )

    def get_annotations_for_report2(
        self,
        workspace: str,
        repo_slug: str,
        commit: str,
        report_id: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> PaginatedAnnotations:
        """Returns a paginated list of Annotations for a specified report.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            repo_slug: The repository.
            commit: The commit for which to retrieve reports.
            report_id: Uuid or external-if of the report for which to get annotations for.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.get_annotations_for_report2(
                workspace, repo_slug, commit, report_id, request_options=request_options
            ),
        )

    def get_report2(
        self,
        workspace: str,
        repo_slug: str,
        commit: str,
        report_id: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ReportBitbucketReportsApi:
        """Returns a single Report matching the provided ID.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            repo_slug: The repository.
            commit: The commit the report belongs to.
            report_id: Either the uuid or external-id of the report.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: The report with the given ID was not found. ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.get_report2(
                workspace, repo_slug, commit, report_id, request_options=request_options
            ),
        )

    def get_reports_for_commit2(
        self, workspace: str, repo_slug: str, commit: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> PaginatedReports:
        """Returns a paginated list of Reports linked to this commit.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            repo_slug: The repository.
            commit: The commit for which to retrieve reports.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.get_reports_for_commit2(
                workspace, repo_slug, commit, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> ReportsWithRawResponse:
        return self._with_raw_response


class AsyncReports:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncReportsWithRawResponse(client, server, auth)

    async def bulk_create_or_update_annotations2(
        self,
        workspace: str,
        repo_slug: str,
        commit: str,
        report_id: str,
        body: list[ReportAnnotationBitbucketReportsApi | ReportAnnotationBitbucketReportsApiDict],
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> list[ReportAnnotationBitbucketReportsApi]:
        r"""Bulk upload of annotations. Annotations are individual findings that have been identified as part of a
        report, for example, a line of code that represents a vulnerability. These annotations can be attached to a
        specific file and even a specific line in that file, however, that is optional. Annotations are not mandatory
        and a report can contain up to 1000 annotations.

        Add the annotations you want to upload as objects in a JSON array and make sure each annotation has the
        external_id field set to a unique value. If you want to use an existing id from your own system, we recommend
        prefixing it with your system's name to avoid collisions, for example, mySystem-annotation001. The external id
        can later be used to identify the report as an alternative to the generated UUID. You can upload up to 100
        annotations per POST request.

        ### Sample cURL request:
        ```
        curl --location 'https://api.bitbucket.org/2.0/repositories///commit//reports/mysystem-001/annotations' \
        --header 'Content-Type: application/json' \ --data-raw '[
        {
        "external_id": "mysystem-annotation001", "title": "Security scan report", "annotation_type": "VULNERABILITY",
        "summary": "This line represents a security threat.", "severity": "HIGH", "path":
        "my-service/src/main/java/com/myCompany/mysystem/logic/Main.java", "line": 42
        },
        {
        "external_id": "mySystem-annotation002", "title": "Bug report", "annotation_type": "BUG", "result": "FAILED",
        "summary": "This line might introduce a bug.", "severity": "MEDIUM", "path":
        "my-service/src/main/java/com/myCompany/mysystem/logic/Helper.java", "line": 13
        }
        ]'
        ```

        ### Possible field values: annotation_type: VULNERABILITY, CODE_SMELL, BUG result: PASSED, FAILED, IGNORED,
        SKIPPED severity: HIGH, MEDIUM, LOW, CRITICAL

        Please refer to the Code Insights documentation for more information.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            repo_slug: The repository.
            commit: The commit for which to retrieve reports.
            report_id: Uuid or external-if of the report for which to get annotations for.
            body: The annotations to create or update
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.bulk_create_or_update_annotations2(
                workspace, repo_slug, commit, report_id, body, request_options=request_options
            ),
        )

    async def create_or_update_annotation2(
        self,
        workspace: str,
        repo_slug: str,
        commit: str,
        report_id: str,
        annotation_id: str,
        body: ReportAnnotationBitbucketReportsApi | ReportAnnotationBitbucketReportsApiDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ReportAnnotationBitbucketReportsApi:
        r"""Creates or updates an individual annotation for the specified report. Annotations are individual findings
        that have been identified as part of a report, for example, a line of code that represents a vulnerability.
        These annotations can be attached to a specific file and even a specific line in that file, however, that is
        optional. Annotations are not mandatory and a report can contain up to 1000 annotations.

        Just as reports, annotation needs to be uploaded with a unique ID that can later be used to identify the report
        as an alternative to the generated UUID. If you want to use an existing id from your own system, we recommend
        prefixing it with your system's name to avoid collisions, for example, mySystem-annotation001.

        ### Sample cURL request:
        ```
        curl --request PUT
        'https://api.bitbucket.org/2.0/repositories///commit//reports/mySystem-001/annotations/mysystem-annotation001' \
        --header 'Content-Type: application/json' \ --data-raw '{ "title": "Security scan report", "annotation_type":
        "VULNERABILITY", "summary": "This line represents a security thread.", "severity": "HIGH", "path":
        "my-service/src/main/java/com/myCompany/mysystem/logic/Main.java", "line": 42
        }'
        ```

        ### Possible field values: annotation_type: VULNERABILITY, CODE_SMELL, BUG result: PASSED, FAILED, IGNORED,
        SKIPPED severity: HIGH, MEDIUM, LOW, CRITICAL

        Please refer to the Code Insights documentation for more information.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            repo_slug: The repository.
            commit: The commit the report belongs to.
            report_id: Either the uuid or external-id of the report.
            annotation_id: Either the uuid or external-id of the annotation.
            body: The annotation to create or update
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: The provided Annotation object is malformed or incomplete. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.create_or_update_annotation2(
                workspace, repo_slug, commit, report_id, annotation_id, body, request_options=request_options
            ),
        )

    async def create_or_update_report2(
        self,
        workspace: str,
        repo_slug: str,
        commit: str,
        report_id: str,
        body: ReportBitbucketReportsApi | ReportBitbucketReportsApiDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ReportBitbucketReportsApi:
        r"""Creates or updates a report for the specified commit. To upload a report, make sure to generate an ID that
        is unique across all reports for that commit. If you want to use an existing id from your own system, we
        recommend prefixing it with your system's name to avoid collisions, for example, mySystem-001.

        ### Sample cURL request:
        ```
        curl --request PUT 'https://api.bitbucket.org/2.0/repositories///commit//reports/mysystem-001' \ --header
        'Content-Type: application/json' \ --data-raw '{ "title": "Security scan report", "details": "This pull request
        introduces 10 new dependency vulnerabilities.", "report_type": "SECURITY", "reporter": "mySystem", "link":
        "http://www.mysystem.com/reports/001", "result": "FAILED", "data": [
        {
        "title": "Duration (seconds)", "type": "DURATION", "value": 14
        },
        {
        "title": "Safe to merge?", "type": "BOOLEAN", "value": false
        }
        ]
        }'
        ```

        ### Possible field values: report_type: SECURITY, COVERAGE, TEST, BUG result: PASSED, FAILED, PENDING data.type:
        BOOLEAN, DATE, DURATION, LINK, NUMBER, PERCENTAGE, TEXT

        #### Data field formats
        | Type Field | Value Field Type | Value Field Display |
        |:--------------|:------------------|:--------------------|
        | None/ Omitted | Number, String or Boolean (not an array or object) | Plain text |
        | BOOLEAN | Boolean | The value will be read as a JSON boolean and displayed as 'Yes' or 'No'. |
        | DATE | Number | The value will be read as a JSON number in the form of a Unix timestamp (milliseconds) and
            will be displayed as a relative date if the date is less than one week ago, otherwise it will be displayed
            as an absolute date. |
        | DURATION | Number | The value will be read as a JSON number in milliseconds and will be displayed in a human
            readable duration format. |
        | LINK | Object: ``{"text": "Link text here", "href": "https://link.to.annotation/in/external/tool"}`` | The
            value will be read as a JSON object containing the fields "text" and "href" and will be displayed as a
            clickable link on the report. |
        | NUMBER | Number | The value will be read as a JSON number and large numbers will be displayed in a human
            readable format (e.g. 14.3k). |
        | PERCENTAGE | Number (between 0 and 100) | The value will be read as a JSON number between 0 and 100 and will
            be displayed with a percentage sign. |
        | TEXT | String | The value will be read as a JSON string and will be displayed as-is |

        Please refer to the Code Insights documentation for more information.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            repo_slug: The repository.
            commit: The commit the report belongs to.
            report_id: Either the uuid or external-id of the report.
            body: The report to create or update
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: The provided Report object is malformed or incomplete. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.create_or_update_report2(
                workspace, repo_slug, commit, report_id, body, request_options=request_options
            ),
        )

    async def delete_annotation2(
        self,
        workspace: str,
        repo_slug: str,
        commit: str,
        report_id: str,
        annotation_id: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Deletes a single Annotation matching the provided ID.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            repo_slug: The repository.
            commit: The commit the annotation belongs to.
            report_id: Either the uuid or external-id of the annotation.
            annotation_id: Either the uuid or external-id of the annotation.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            No content

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.delete_annotation2(
                workspace, repo_slug, commit, report_id, annotation_id, request_options=request_options
            ),
        )

    async def delete_report2(
        self,
        workspace: str,
        repo_slug: str,
        commit: str,
        report_id: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Deletes a single Report matching the provided ID.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            repo_slug: The repository.
            commit: The commit the report belongs to.
            report_id: Either the uuid or external-id of the report.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            No content

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.delete_report2(
                workspace, repo_slug, commit, report_id, request_options=request_options
            ),
        )

    async def get_annotation2(
        self,
        workspace: str,
        repo_slug: str,
        commit: str,
        report_id: str,
        annotation_id: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ReportAnnotationBitbucketReportsApi:
        """Returns a single Annotation matching the provided ID.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            repo_slug: The repository.
            commit: The commit the report belongs to.
            report_id: Either the uuid or external-id of the report.
            annotation_id: Either the uuid or external-id of the annotation.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: The annotation with the given ID was not found. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.get_annotation2(
                workspace, repo_slug, commit, report_id, annotation_id, request_options=request_options
            ),
        )

    async def get_annotations_for_report2(
        self,
        workspace: str,
        repo_slug: str,
        commit: str,
        report_id: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> PaginatedAnnotations:
        """Returns a paginated list of Annotations for a specified report.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            repo_slug: The repository.
            commit: The commit for which to retrieve reports.
            report_id: Uuid or external-if of the report for which to get annotations for.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.get_annotations_for_report2(
                workspace, repo_slug, commit, report_id, request_options=request_options
            ),
        )

    async def get_report2(
        self,
        workspace: str,
        repo_slug: str,
        commit: str,
        report_id: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ReportBitbucketReportsApi:
        """Returns a single Report matching the provided ID.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            repo_slug: The repository.
            commit: The commit the report belongs to.
            report_id: Either the uuid or external-id of the report.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: The report with the given ID was not found. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.get_report2(
                workspace, repo_slug, commit, report_id, request_options=request_options
            ),
        )

    async def get_reports_for_commit2(
        self, workspace: str, repo_slug: str, commit: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> PaginatedReports:
        """Returns a paginated list of Reports linked to this commit.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            repo_slug: The repository.
            commit: The commit for which to retrieve reports.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.get_reports_for_commit2(
                workspace, repo_slug, commit, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncReportsWithRawResponse:
        return self._with_raw_response


class ReportsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def bulk_create_or_update_annotations2(
        self,
        workspace: str,
        repo_slug: str,
        commit: str,
        report_id: str,
        body: list[ReportAnnotationBitbucketReportsApi | ReportAnnotationBitbucketReportsApiDict],
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[list[ReportAnnotationBitbucketReportsApi], RawError]:
        r"""Bulk upload of annotations. Annotations are individual findings that have been identified as part of a
        report, for example, a line of code that represents a vulnerability. These annotations can be attached to a
        specific file and even a specific line in that file, however, that is optional. Annotations are not mandatory
        and a report can contain up to 1000 annotations.

        Add the annotations you want to upload as objects in a JSON array and make sure each annotation has the
        external_id field set to a unique value. If you want to use an existing id from your own system, we recommend
        prefixing it with your system's name to avoid collisions, for example, mySystem-annotation001. The external id
        can later be used to identify the report as an alternative to the generated UUID. You can upload up to 100
        annotations per POST request.

        ### Sample cURL request:
        ```
        curl --location 'https://api.bitbucket.org/2.0/repositories///commit//reports/mysystem-001/annotations' \
        --header 'Content-Type: application/json' \ --data-raw '[
        {
        "external_id": "mysystem-annotation001", "title": "Security scan report", "annotation_type": "VULNERABILITY",
        "summary": "This line represents a security threat.", "severity": "HIGH", "path":
        "my-service/src/main/java/com/myCompany/mysystem/logic/Main.java", "line": 42
        },
        {
        "external_id": "mySystem-annotation002", "title": "Bug report", "annotation_type": "BUG", "result": "FAILED",
        "summary": "This line might introduce a bug.", "severity": "MEDIUM", "path":
        "my-service/src/main/java/com/myCompany/mysystem/logic/Helper.java", "line": 13
        }
        ]'
        ```

        ### Possible field values: annotation_type: VULNERABILITY, CODE_SMELL, BUG result: PASSED, FAILED, IGNORED,
        SKIPPED severity: HIGH, MEDIUM, LOW, CRITICAL

        Please refer to the Code Insights documentation for more information.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            repo_slug: The repository.
            commit: The commit for which to retrieve reports.
            report_id: Uuid or external-if of the report for which to get annotations for.
            body: The annotations to create or update
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default(
                "/repositories/{workspace}/{repo_slug}/commit/{commit}/reports/{reportId}/annotations"
            ),
            path_params=[
                param[str]("workspace", workspace),
                param[str]("repo_slug", repo_slug),
                param[str]("commit", commit),
                param[str]("reportId", report_id),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[list[ReportAnnotationBitbucketReportsApi | ReportAnnotationBitbucketReportsApiDict]](body),
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=json_decoder[list[ReportAnnotationBitbucketReportsApi]],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def create_or_update_annotation2(
        self,
        workspace: str,
        repo_slug: str,
        commit: str,
        report_id: str,
        annotation_id: str,
        body: ReportAnnotationBitbucketReportsApi | ReportAnnotationBitbucketReportsApiDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ReportAnnotationBitbucketReportsApi, CreateOrUpdateAnnotation2ErrorBody]:
        r"""Creates or updates an individual annotation for the specified report. Annotations are individual findings
        that have been identified as part of a report, for example, a line of code that represents a vulnerability.
        These annotations can be attached to a specific file and even a specific line in that file, however, that is
        optional. Annotations are not mandatory and a report can contain up to 1000 annotations.

        Just as reports, annotation needs to be uploaded with a unique ID that can later be used to identify the report
        as an alternative to the generated UUID. If you want to use an existing id from your own system, we recommend
        prefixing it with your system's name to avoid collisions, for example, mySystem-annotation001.

        ### Sample cURL request:
        ```
        curl --request PUT
        'https://api.bitbucket.org/2.0/repositories///commit//reports/mySystem-001/annotations/mysystem-annotation001' \
        --header 'Content-Type: application/json' \ --data-raw '{ "title": "Security scan report", "annotation_type":
        "VULNERABILITY", "summary": "This line represents a security thread.", "severity": "HIGH", "path":
        "my-service/src/main/java/com/myCompany/mysystem/logic/Main.java", "line": 42
        }'
        ```

        ### Possible field values: annotation_type: VULNERABILITY, CODE_SMELL, BUG result: PASSED, FAILED, IGNORED,
        SKIPPED severity: HIGH, MEDIUM, LOW, CRITICAL

        Please refer to the Code Insights documentation for more information.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            repo_slug: The repository.
            commit: The commit the report belongs to.
            report_id: Either the uuid or external-id of the report.
            annotation_id: Either the uuid or external-id of the annotation.
            body: The annotation to create or update
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PUT",
            url_template=self._server.default(
                "/repositories/{workspace}/{repo_slug}/commit/{commit}/reports/{reportId}/annotations/{annotationId}"
            ),
            path_params=[
                param[str]("workspace", workspace),
                param[str]("repo_slug", repo_slug),
                param[str]("commit", commit),
                param[str]("reportId", report_id),
                param[str]("annotationId", annotation_id),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ReportAnnotationBitbucketReportsApi | ReportAnnotationBitbucketReportsApiDict](body),
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=json_decoder[ReportAnnotationBitbucketReportsApi],
            error_mapper=create_or_update_annotation2_error_mapper,
            request_options=request_options,
        )

    def create_or_update_report2(
        self,
        workspace: str,
        repo_slug: str,
        commit: str,
        report_id: str,
        body: ReportBitbucketReportsApi | ReportBitbucketReportsApiDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ReportBitbucketReportsApi, CreateOrUpdateReport2ErrorBody]:
        r"""Creates or updates a report for the specified commit. To upload a report, make sure to generate an ID that
        is unique across all reports for that commit. If you want to use an existing id from your own system, we
        recommend prefixing it with your system's name to avoid collisions, for example, mySystem-001.

        ### Sample cURL request:
        ```
        curl --request PUT 'https://api.bitbucket.org/2.0/repositories///commit//reports/mysystem-001' \ --header
        'Content-Type: application/json' \ --data-raw '{ "title": "Security scan report", "details": "This pull request
        introduces 10 new dependency vulnerabilities.", "report_type": "SECURITY", "reporter": "mySystem", "link":
        "http://www.mysystem.com/reports/001", "result": "FAILED", "data": [
        {
        "title": "Duration (seconds)", "type": "DURATION", "value": 14
        },
        {
        "title": "Safe to merge?", "type": "BOOLEAN", "value": false
        }
        ]
        }'
        ```

        ### Possible field values: report_type: SECURITY, COVERAGE, TEST, BUG result: PASSED, FAILED, PENDING data.type:
        BOOLEAN, DATE, DURATION, LINK, NUMBER, PERCENTAGE, TEXT

        #### Data field formats
        | Type Field | Value Field Type | Value Field Display |
        |:--------------|:------------------|:--------------------|
        | None/ Omitted | Number, String or Boolean (not an array or object) | Plain text |
        | BOOLEAN | Boolean | The value will be read as a JSON boolean and displayed as 'Yes' or 'No'. |
        | DATE | Number | The value will be read as a JSON number in the form of a Unix timestamp (milliseconds) and
            will be displayed as a relative date if the date is less than one week ago, otherwise it will be displayed
            as an absolute date. |
        | DURATION | Number | The value will be read as a JSON number in milliseconds and will be displayed in a human
            readable duration format. |
        | LINK | Object: ``{"text": "Link text here", "href": "https://link.to.annotation/in/external/tool"}`` | The
            value will be read as a JSON object containing the fields "text" and "href" and will be displayed as a
            clickable link on the report. |
        | NUMBER | Number | The value will be read as a JSON number and large numbers will be displayed in a human
            readable format (e.g. 14.3k). |
        | PERCENTAGE | Number (between 0 and 100) | The value will be read as a JSON number between 0 and 100 and will
            be displayed with a percentage sign. |
        | TEXT | String | The value will be read as a JSON string and will be displayed as-is |

        Please refer to the Code Insights documentation for more information.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            repo_slug: The repository.
            commit: The commit the report belongs to.
            report_id: Either the uuid or external-id of the report.
            body: The report to create or update
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PUT",
            url_template=self._server.default(
                "/repositories/{workspace}/{repo_slug}/commit/{commit}/reports/{reportId}"
            ),
            path_params=[
                param[str]("workspace", workspace),
                param[str]("repo_slug", repo_slug),
                param[str]("commit", commit),
                param[str]("reportId", report_id),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ReportBitbucketReportsApi | ReportBitbucketReportsApiDict](body),
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=json_decoder[ReportBitbucketReportsApi],
            error_mapper=create_or_update_report2_error_mapper,
            request_options=request_options,
        )

    def delete_annotation2(
        self,
        workspace: str,
        repo_slug: str,
        commit: str,
        report_id: str,
        annotation_id: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, RawError]:
        """Deletes a single Annotation matching the provided ID.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            repo_slug: The repository.
            commit: The commit the annotation belongs to.
            report_id: Either the uuid or external-id of the annotation.
            annotation_id: Either the uuid or external-id of the annotation.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default(
                "/repositories/{workspace}/{repo_slug}/commit/{commit}/reports/{reportId}/annotations/{annotationId}"
            ),
            path_params=[
                param[str]("workspace", workspace),
                param[str]("repo_slug", repo_slug),
                param[str]("commit", commit),
                param[str]("reportId", report_id),
                param[str]("annotationId", annotation_id),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=empty_response,
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def delete_report2(
        self,
        workspace: str,
        repo_slug: str,
        commit: str,
        report_id: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, RawError]:
        """Deletes a single Report matching the provided ID.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            repo_slug: The repository.
            commit: The commit the report belongs to.
            report_id: Either the uuid or external-id of the report.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default(
                "/repositories/{workspace}/{repo_slug}/commit/{commit}/reports/{reportId}"
            ),
            path_params=[
                param[str]("workspace", workspace),
                param[str]("repo_slug", repo_slug),
                param[str]("commit", commit),
                param[str]("reportId", report_id),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=empty_response,
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def get_annotation2(
        self,
        workspace: str,
        repo_slug: str,
        commit: str,
        report_id: str,
        annotation_id: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ReportAnnotationBitbucketReportsApi, GetAnnotation2ErrorBody]:
        """Returns a single Annotation matching the provided ID.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            repo_slug: The repository.
            commit: The commit the report belongs to.
            report_id: Either the uuid or external-id of the report.
            annotation_id: Either the uuid or external-id of the annotation.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default(
                "/repositories/{workspace}/{repo_slug}/commit/{commit}/reports/{reportId}/annotations/{annotationId}"
            ),
            path_params=[
                param[str]("workspace", workspace),
                param[str]("repo_slug", repo_slug),
                param[str]("commit", commit),
                param[str]("reportId", report_id),
                param[str]("annotationId", annotation_id),
            ],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=json_decoder[ReportAnnotationBitbucketReportsApi],
            error_mapper=get_annotation2_error_mapper,
            request_options=request_options,
        )

    def get_annotations_for_report2(
        self,
        workspace: str,
        repo_slug: str,
        commit: str,
        report_id: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[PaginatedAnnotations, RawError]:
        """Returns a paginated list of Annotations for a specified report.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            repo_slug: The repository.
            commit: The commit for which to retrieve reports.
            report_id: Uuid or external-if of the report for which to get annotations for.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default(
                "/repositories/{workspace}/{repo_slug}/commit/{commit}/reports/{reportId}/annotations"
            ),
            path_params=[
                param[str]("workspace", workspace),
                param[str]("repo_slug", repo_slug),
                param[str]("commit", commit),
                param[str]("reportId", report_id),
            ],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=json_decoder[PaginatedAnnotations],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def get_report2(
        self,
        workspace: str,
        repo_slug: str,
        commit: str,
        report_id: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ReportBitbucketReportsApi, GetReport2ErrorBody]:
        """Returns a single Report matching the provided ID.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            repo_slug: The repository.
            commit: The commit the report belongs to.
            report_id: Either the uuid or external-id of the report.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default(
                "/repositories/{workspace}/{repo_slug}/commit/{commit}/reports/{reportId}"
            ),
            path_params=[
                param[str]("workspace", workspace),
                param[str]("repo_slug", repo_slug),
                param[str]("commit", commit),
                param[str]("reportId", report_id),
            ],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=json_decoder[ReportBitbucketReportsApi],
            error_mapper=get_report2_error_mapper,
            request_options=request_options,
        )

    def get_reports_for_commit2(
        self, workspace: str, repo_slug: str, commit: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[PaginatedReports, RawError]:
        """Returns a paginated list of Reports linked to this commit.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            repo_slug: The repository.
            commit: The commit for which to retrieve reports.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/repositories/{workspace}/{repo_slug}/commit/{commit}/reports"),
            path_params=[
                param[str]("workspace", workspace), param[str]("repo_slug", repo_slug), param[str]("commit", commit)
            ],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=json_decoder[PaginatedReports],
            error_mapper=raw_error_response,
            request_options=request_options,
        )


class AsyncReportsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def bulk_create_or_update_annotations2(
        self,
        workspace: str,
        repo_slug: str,
        commit: str,
        report_id: str,
        body: list[ReportAnnotationBitbucketReportsApi | ReportAnnotationBitbucketReportsApiDict],
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[list[ReportAnnotationBitbucketReportsApi], RawError]:
        r"""Bulk upload of annotations. Annotations are individual findings that have been identified as part of a
        report, for example, a line of code that represents a vulnerability. These annotations can be attached to a
        specific file and even a specific line in that file, however, that is optional. Annotations are not mandatory
        and a report can contain up to 1000 annotations.

        Add the annotations you want to upload as objects in a JSON array and make sure each annotation has the
        external_id field set to a unique value. If you want to use an existing id from your own system, we recommend
        prefixing it with your system's name to avoid collisions, for example, mySystem-annotation001. The external id
        can later be used to identify the report as an alternative to the generated UUID. You can upload up to 100
        annotations per POST request.

        ### Sample cURL request:
        ```
        curl --location 'https://api.bitbucket.org/2.0/repositories///commit//reports/mysystem-001/annotations' \
        --header 'Content-Type: application/json' \ --data-raw '[
        {
        "external_id": "mysystem-annotation001", "title": "Security scan report", "annotation_type": "VULNERABILITY",
        "summary": "This line represents a security threat.", "severity": "HIGH", "path":
        "my-service/src/main/java/com/myCompany/mysystem/logic/Main.java", "line": 42
        },
        {
        "external_id": "mySystem-annotation002", "title": "Bug report", "annotation_type": "BUG", "result": "FAILED",
        "summary": "This line might introduce a bug.", "severity": "MEDIUM", "path":
        "my-service/src/main/java/com/myCompany/mysystem/logic/Helper.java", "line": 13
        }
        ]'
        ```

        ### Possible field values: annotation_type: VULNERABILITY, CODE_SMELL, BUG result: PASSED, FAILED, IGNORED,
        SKIPPED severity: HIGH, MEDIUM, LOW, CRITICAL

        Please refer to the Code Insights documentation for more information.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            repo_slug: The repository.
            commit: The commit for which to retrieve reports.
            report_id: Uuid or external-if of the report for which to get annotations for.
            body: The annotations to create or update
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default(
                "/repositories/{workspace}/{repo_slug}/commit/{commit}/reports/{reportId}/annotations"
            ),
            path_params=[
                param[str]("workspace", workspace),
                param[str]("repo_slug", repo_slug),
                param[str]("commit", commit),
                param[str]("reportId", report_id),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[list[ReportAnnotationBitbucketReportsApi | ReportAnnotationBitbucketReportsApiDict]](body),
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_json_decoder[list[ReportAnnotationBitbucketReportsApi]],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def create_or_update_annotation2(
        self,
        workspace: str,
        repo_slug: str,
        commit: str,
        report_id: str,
        annotation_id: str,
        body: ReportAnnotationBitbucketReportsApi | ReportAnnotationBitbucketReportsApiDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ReportAnnotationBitbucketReportsApi, CreateOrUpdateAnnotation2ErrorBody]:
        r"""Creates or updates an individual annotation for the specified report. Annotations are individual findings
        that have been identified as part of a report, for example, a line of code that represents a vulnerability.
        These annotations can be attached to a specific file and even a specific line in that file, however, that is
        optional. Annotations are not mandatory and a report can contain up to 1000 annotations.

        Just as reports, annotation needs to be uploaded with a unique ID that can later be used to identify the report
        as an alternative to the generated UUID. If you want to use an existing id from your own system, we recommend
        prefixing it with your system's name to avoid collisions, for example, mySystem-annotation001.

        ### Sample cURL request:
        ```
        curl --request PUT
        'https://api.bitbucket.org/2.0/repositories///commit//reports/mySystem-001/annotations/mysystem-annotation001' \
        --header 'Content-Type: application/json' \ --data-raw '{ "title": "Security scan report", "annotation_type":
        "VULNERABILITY", "summary": "This line represents a security thread.", "severity": "HIGH", "path":
        "my-service/src/main/java/com/myCompany/mysystem/logic/Main.java", "line": 42
        }'
        ```

        ### Possible field values: annotation_type: VULNERABILITY, CODE_SMELL, BUG result: PASSED, FAILED, IGNORED,
        SKIPPED severity: HIGH, MEDIUM, LOW, CRITICAL

        Please refer to the Code Insights documentation for more information.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            repo_slug: The repository.
            commit: The commit the report belongs to.
            report_id: Either the uuid or external-id of the report.
            annotation_id: Either the uuid or external-id of the annotation.
            body: The annotation to create or update
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PUT",
            url_template=self._server.default(
                "/repositories/{workspace}/{repo_slug}/commit/{commit}/reports/{reportId}/annotations/{annotationId}"
            ),
            path_params=[
                param[str]("workspace", workspace),
                param[str]("repo_slug", repo_slug),
                param[str]("commit", commit),
                param[str]("reportId", report_id),
                param[str]("annotationId", annotation_id),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ReportAnnotationBitbucketReportsApi | ReportAnnotationBitbucketReportsApiDict](body),
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_json_decoder[ReportAnnotationBitbucketReportsApi],
            error_mapper=create_or_update_annotation2_error_mapper,
            request_options=request_options,
        )

    async def create_or_update_report2(
        self,
        workspace: str,
        repo_slug: str,
        commit: str,
        report_id: str,
        body: ReportBitbucketReportsApi | ReportBitbucketReportsApiDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ReportBitbucketReportsApi, CreateOrUpdateReport2ErrorBody]:
        r"""Creates or updates a report for the specified commit. To upload a report, make sure to generate an ID that
        is unique across all reports for that commit. If you want to use an existing id from your own system, we
        recommend prefixing it with your system's name to avoid collisions, for example, mySystem-001.

        ### Sample cURL request:
        ```
        curl --request PUT 'https://api.bitbucket.org/2.0/repositories///commit//reports/mysystem-001' \ --header
        'Content-Type: application/json' \ --data-raw '{ "title": "Security scan report", "details": "This pull request
        introduces 10 new dependency vulnerabilities.", "report_type": "SECURITY", "reporter": "mySystem", "link":
        "http://www.mysystem.com/reports/001", "result": "FAILED", "data": [
        {
        "title": "Duration (seconds)", "type": "DURATION", "value": 14
        },
        {
        "title": "Safe to merge?", "type": "BOOLEAN", "value": false
        }
        ]
        }'
        ```

        ### Possible field values: report_type: SECURITY, COVERAGE, TEST, BUG result: PASSED, FAILED, PENDING data.type:
        BOOLEAN, DATE, DURATION, LINK, NUMBER, PERCENTAGE, TEXT

        #### Data field formats
        | Type Field | Value Field Type | Value Field Display |
        |:--------------|:------------------|:--------------------|
        | None/ Omitted | Number, String or Boolean (not an array or object) | Plain text |
        | BOOLEAN | Boolean | The value will be read as a JSON boolean and displayed as 'Yes' or 'No'. |
        | DATE | Number | The value will be read as a JSON number in the form of a Unix timestamp (milliseconds) and
            will be displayed as a relative date if the date is less than one week ago, otherwise it will be displayed
            as an absolute date. |
        | DURATION | Number | The value will be read as a JSON number in milliseconds and will be displayed in a human
            readable duration format. |
        | LINK | Object: ``{"text": "Link text here", "href": "https://link.to.annotation/in/external/tool"}`` | The
            value will be read as a JSON object containing the fields "text" and "href" and will be displayed as a
            clickable link on the report. |
        | NUMBER | Number | The value will be read as a JSON number and large numbers will be displayed in a human
            readable format (e.g. 14.3k). |
        | PERCENTAGE | Number (between 0 and 100) | The value will be read as a JSON number between 0 and 100 and will
            be displayed with a percentage sign. |
        | TEXT | String | The value will be read as a JSON string and will be displayed as-is |

        Please refer to the Code Insights documentation for more information.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            repo_slug: The repository.
            commit: The commit the report belongs to.
            report_id: Either the uuid or external-id of the report.
            body: The report to create or update
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PUT",
            url_template=self._server.default(
                "/repositories/{workspace}/{repo_slug}/commit/{commit}/reports/{reportId}"
            ),
            path_params=[
                param[str]("workspace", workspace),
                param[str]("repo_slug", repo_slug),
                param[str]("commit", commit),
                param[str]("reportId", report_id),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ReportBitbucketReportsApi | ReportBitbucketReportsApiDict](body),
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_json_decoder[ReportBitbucketReportsApi],
            error_mapper=create_or_update_report2_error_mapper,
            request_options=request_options,
        )

    async def delete_annotation2(
        self,
        workspace: str,
        repo_slug: str,
        commit: str,
        report_id: str,
        annotation_id: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, RawError]:
        """Deletes a single Annotation matching the provided ID.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            repo_slug: The repository.
            commit: The commit the annotation belongs to.
            report_id: Either the uuid or external-id of the annotation.
            annotation_id: Either the uuid or external-id of the annotation.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default(
                "/repositories/{workspace}/{repo_slug}/commit/{commit}/reports/{reportId}/annotations/{annotationId}"
            ),
            path_params=[
                param[str]("workspace", workspace),
                param[str]("repo_slug", repo_slug),
                param[str]("commit", commit),
                param[str]("reportId", report_id),
                param[str]("annotationId", annotation_id),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_empty_response,
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def delete_report2(
        self,
        workspace: str,
        repo_slug: str,
        commit: str,
        report_id: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, RawError]:
        """Deletes a single Report matching the provided ID.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            repo_slug: The repository.
            commit: The commit the report belongs to.
            report_id: Either the uuid or external-id of the report.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default(
                "/repositories/{workspace}/{repo_slug}/commit/{commit}/reports/{reportId}"
            ),
            path_params=[
                param[str]("workspace", workspace),
                param[str]("repo_slug", repo_slug),
                param[str]("commit", commit),
                param[str]("reportId", report_id),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_empty_response,
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def get_annotation2(
        self,
        workspace: str,
        repo_slug: str,
        commit: str,
        report_id: str,
        annotation_id: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ReportAnnotationBitbucketReportsApi, GetAnnotation2ErrorBody]:
        """Returns a single Annotation matching the provided ID.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            repo_slug: The repository.
            commit: The commit the report belongs to.
            report_id: Either the uuid or external-id of the report.
            annotation_id: Either the uuid or external-id of the annotation.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default(
                "/repositories/{workspace}/{repo_slug}/commit/{commit}/reports/{reportId}/annotations/{annotationId}"
            ),
            path_params=[
                param[str]("workspace", workspace),
                param[str]("repo_slug", repo_slug),
                param[str]("commit", commit),
                param[str]("reportId", report_id),
                param[str]("annotationId", annotation_id),
            ],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_json_decoder[ReportAnnotationBitbucketReportsApi],
            error_mapper=get_annotation2_error_mapper,
            request_options=request_options,
        )

    async def get_annotations_for_report2(
        self,
        workspace: str,
        repo_slug: str,
        commit: str,
        report_id: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[PaginatedAnnotations, RawError]:
        """Returns a paginated list of Annotations for a specified report.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            repo_slug: The repository.
            commit: The commit for which to retrieve reports.
            report_id: Uuid or external-if of the report for which to get annotations for.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default(
                "/repositories/{workspace}/{repo_slug}/commit/{commit}/reports/{reportId}/annotations"
            ),
            path_params=[
                param[str]("workspace", workspace),
                param[str]("repo_slug", repo_slug),
                param[str]("commit", commit),
                param[str]("reportId", report_id),
            ],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_json_decoder[PaginatedAnnotations],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def get_report2(
        self,
        workspace: str,
        repo_slug: str,
        commit: str,
        report_id: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ReportBitbucketReportsApi, GetReport2ErrorBody]:
        """Returns a single Report matching the provided ID.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            repo_slug: The repository.
            commit: The commit the report belongs to.
            report_id: Either the uuid or external-id of the report.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default(
                "/repositories/{workspace}/{repo_slug}/commit/{commit}/reports/{reportId}"
            ),
            path_params=[
                param[str]("workspace", workspace),
                param[str]("repo_slug", repo_slug),
                param[str]("commit", commit),
                param[str]("reportId", report_id),
            ],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_json_decoder[ReportBitbucketReportsApi],
            error_mapper=get_report2_error_mapper,
            request_options=request_options,
        )

    async def get_reports_for_commit2(
        self, workspace: str, repo_slug: str, commit: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[PaginatedReports, RawError]:
        """Returns a paginated list of Reports linked to this commit.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            repo_slug: The repository.
            commit: The commit for which to retrieve reports.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/repositories/{workspace}/{repo_slug}/commit/{commit}/reports"),
            path_params=[
                param[str]("workspace", workspace), param[str]("repo_slug", repo_slug), param[str]("commit", commit)
            ],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_json_decoder[PaginatedReports],
            error_mapper=raw_error_response,
            request_options=request_options,
        )
