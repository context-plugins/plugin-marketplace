from __future__ import annotations

from uuid import UUID, uuid4

from ..core import (
    ApiResult,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    BaseRawResponse,
    RawClient,
    RequestOptionsOrDict,
    async_json_decoder,
    json_body,
    json_decoder,
    param,
    unwrap,
)
from ..errors.create2_error import Create2ErrorBody, create2_error_mapper
from ..errors.index5_error import Index5ErrorBody, index5_error_mapper
from ..errors.show2_error import Show2ErrorBody, show2_error_mapper
from ..models.automation_journeys_index_response import AutomationJourneysIndexResponse
from ..models.automation_journeys_response import AutomationJourneysResponse
from ..models.enums.automation_journeys_get_request_status import (
    AutomationJourneysGetRequestStatus,
    AutomationJourneysGetRequestStatusOrStr,
)
from ..models.publications_automations_journeys_request import (
    PublicationsAutomationsJourneysRequest,
    PublicationsAutomationsJourneysRequestDict,
)
from ..server.server import Server


class AutomationJourneys:
    def __init__(self, client: RawClient, server: Server) -> None:
        self._with_raw_response = AutomationJourneysWithRawResponse(client, server)

    def create2(
        self,
        publication_id: str,
        automation_id: str,
        authorization: str,
        *,
        body: PublicationsAutomationsJourneysRequest | PublicationsAutomationsJourneysRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> AutomationJourneysResponse:
        """Add an existing subscription to an automation flow. Requires the automation to have an active *Add by API*
        trigger. The specified ``email`` or ``subscription_id`` will be matched against your existing subscribers. If an
        existing subscriber is found, they will be enrolled immediately. Looking to enroll new subscribers? Use the
        **Create Subscription** endpoint instead and specify the ``automation_ids`` param.

        Args:
            publication_id: The prefixed ID of the publication object
            automation_id: The prefixed ID of the automation object
            authorization: Bearer authentication
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Created

        Raises:
            ApiError: Bad Request Unauthorized. The API key or OAuth access token is missing, invalid, or expired.
                Resource Not Found Rate Limit Exceeded Internal Server Error ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.create2(
                publication_id, automation_id, authorization, body=body, request_options=request_options
            ),
        )

    def index5(
        self,
        publication_id: str,
        automation_id: str,
        authorization: str,
        *,
        status: AutomationJourneysGetRequestStatusOrStr | None = AutomationJourneysGetRequestStatus.ALL,
        limit: int | None = None,
        page: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> AutomationJourneysIndexResponse:
        """Retrieve a list of automation journeys that have occurred within a specific automation.

        Args:
            publication_id: The prefixed ID of the publication object
            automation_id: The prefixed ID of the automation object
            authorization: Bearer authentication
            status: Optionally filter the results by the automation journey's status.
            limit: A limit on the number of objects to be returned. The limit can range between 1 and 100, and the
                default is 10.
            page: Pagination returns the results in pages. Each page contains the number of results specified by the
                ``limit`` (default: 10).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Bad Request Unauthorized. The API key or OAuth access token is missing, invalid, or expired.
                Resource Not Found Rate Limit Exceeded Internal Server Error ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.index5(
                publication_id,
                automation_id,
                authorization,
                status=status,
                limit=limit,
                page=page,
                request_options=request_options,
            ),
        )

    def show2(
        self,
        publication_id: str,
        automation_id: str,
        automation_journey_id: str,
        authorization: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> AutomationJourneysResponse:
        """Retrieve a single automation journey by ID.

        Args:
            publication_id: The prefixed ID of the publication object
            automation_id: The prefixed ID of the automation object
            automation_journey_id: The prefixed automation journey id
            authorization: Bearer authentication
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Bad Request Unauthorized. The API key or OAuth access token is missing, invalid, or expired.
                Resource Not Found Rate Limit Exceeded Internal Server Error ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.show2(
                publication_id, automation_id, automation_journey_id, authorization, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AutomationJourneysWithRawResponse:
        return self._with_raw_response


class AsyncAutomationJourneys:
    def __init__(self, client: AsyncRawClient, server: Server) -> None:
        self._with_raw_response = AsyncAutomationJourneysWithRawResponse(client, server)

    async def create2(
        self,
        publication_id: str,
        automation_id: str,
        authorization: str,
        *,
        body: PublicationsAutomationsJourneysRequest | PublicationsAutomationsJourneysRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> AutomationJourneysResponse:
        """Add an existing subscription to an automation flow. Requires the automation to have an active *Add by API*
        trigger. The specified ``email`` or ``subscription_id`` will be matched against your existing subscribers. If an
        existing subscriber is found, they will be enrolled immediately. Looking to enroll new subscribers? Use the
        **Create Subscription** endpoint instead and specify the ``automation_ids`` param.

        Args:
            publication_id: The prefixed ID of the publication object
            automation_id: The prefixed ID of the automation object
            authorization: Bearer authentication
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Created

        Raises:
            ApiError: Bad Request Unauthorized. The API key or OAuth access token is missing, invalid, or expired.
                Resource Not Found Rate Limit Exceeded Internal Server Error ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.create2(
                publication_id, automation_id, authorization, body=body, request_options=request_options
            ),
        )

    async def index5(
        self,
        publication_id: str,
        automation_id: str,
        authorization: str,
        *,
        status: AutomationJourneysGetRequestStatusOrStr | None = AutomationJourneysGetRequestStatus.ALL,
        limit: int | None = None,
        page: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> AutomationJourneysIndexResponse:
        """Retrieve a list of automation journeys that have occurred within a specific automation.

        Args:
            publication_id: The prefixed ID of the publication object
            automation_id: The prefixed ID of the automation object
            authorization: Bearer authentication
            status: Optionally filter the results by the automation journey's status.
            limit: A limit on the number of objects to be returned. The limit can range between 1 and 100, and the
                default is 10.
            page: Pagination returns the results in pages. Each page contains the number of results specified by the
                ``limit`` (default: 10).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Bad Request Unauthorized. The API key or OAuth access token is missing, invalid, or expired.
                Resource Not Found Rate Limit Exceeded Internal Server Error ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.index5(
                publication_id,
                automation_id,
                authorization,
                status=status,
                limit=limit,
                page=page,
                request_options=request_options,
            ),
        )

    async def show2(
        self,
        publication_id: str,
        automation_id: str,
        automation_journey_id: str,
        authorization: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> AutomationJourneysResponse:
        """Retrieve a single automation journey by ID.

        Args:
            publication_id: The prefixed ID of the publication object
            automation_id: The prefixed ID of the automation object
            automation_journey_id: The prefixed automation journey id
            authorization: Bearer authentication
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Bad Request Unauthorized. The API key or OAuth access token is missing, invalid, or expired.
                Resource Not Found Rate Limit Exceeded Internal Server Error ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.show2(
                publication_id, automation_id, automation_journey_id, authorization, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncAutomationJourneysWithRawResponse:
        return self._with_raw_response


class AutomationJourneysWithRawResponse(BaseRawResponse[RawClient, Server]):
    def create2(
        self,
        publication_id: str,
        automation_id: str,
        authorization: str,
        *,
        body: PublicationsAutomationsJourneysRequest | PublicationsAutomationsJourneysRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[AutomationJourneysResponse, Create2ErrorBody]:
        """Add an existing subscription to an automation flow. Requires the automation to have an active *Add by API*
        trigger. The specified ``email`` or ``subscription_id`` will be matched against your existing subscribers. If an
        existing subscriber is found, they will be enrolled immediately. Looking to enroll new subscribers? Use the
        **Create Subscription** endpoint instead and specify the ``automation_ids`` param.

        Args:
            publication_id: The prefixed ID of the publication object
            automation_id: The prefixed ID of the automation object
            authorization: Bearer authentication
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/publications/{publicationId}/automations/{automationId}/journeys"),
            path_params=[param[str]("publicationId", publication_id), param[str]("automationId", automation_id)],
            headers=[param[str]("Authorization", authorization), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PublicationsAutomationsJourneysRequest | PublicationsAutomationsJourneysRequestDict | None](
                body
            ),
            decoder=json_decoder[AutomationJourneysResponse],
            error_mapper=create2_error_mapper,
            request_options=request_options,
        )

    def index5(
        self,
        publication_id: str,
        automation_id: str,
        authorization: str,
        *,
        status: AutomationJourneysGetRequestStatusOrStr | None = AutomationJourneysGetRequestStatus.ALL,
        limit: int | None = None,
        page: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[AutomationJourneysIndexResponse, Index5ErrorBody]:
        """Retrieve a list of automation journeys that have occurred within a specific automation.

        Args:
            publication_id: The prefixed ID of the publication object
            automation_id: The prefixed ID of the automation object
            authorization: Bearer authentication
            status: Optionally filter the results by the automation journey's status.
            limit: A limit on the number of objects to be returned. The limit can range between 1 and 100, and the
                default is 10.
            page: Pagination returns the results in pages. Each page contains the number of results specified by the
                ``limit`` (default: 10).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/publications/{publicationId}/automations/{automationId}/journeys"),
            path_params=[param[str]("publicationId", publication_id), param[str]("automationId", automation_id)],
            query_params=[
                param[AutomationJourneysGetRequestStatusOrStr | None]("status", status),
                param[int | None]("limit", limit),
                param[int | None]("page", page),
            ],
            headers=[param[str]("Authorization", authorization)],
            decoder=json_decoder[AutomationJourneysIndexResponse],
            error_mapper=index5_error_mapper,
            request_options=request_options,
        )

    def show2(
        self,
        publication_id: str,
        automation_id: str,
        automation_journey_id: str,
        authorization: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[AutomationJourneysResponse, Show2ErrorBody]:
        """Retrieve a single automation journey by ID.

        Args:
            publication_id: The prefixed ID of the publication object
            automation_id: The prefixed ID of the automation object
            automation_journey_id: The prefixed automation journey id
            authorization: Bearer authentication
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default(
                "/publications/{publicationId}/automations/{automationId}/journeys/{automationJourneyId}"
            ),
            path_params=[
                param[str]("publicationId", publication_id),
                param[str]("automationId", automation_id),
                param[str]("automationJourneyId", automation_journey_id),
            ],
            headers=[param[str]("Authorization", authorization)],
            decoder=json_decoder[AutomationJourneysResponse],
            error_mapper=show2_error_mapper,
            request_options=request_options,
        )


class AsyncAutomationJourneysWithRawResponse(BaseRawResponse[AsyncRawClient, Server]):
    async def create2(
        self,
        publication_id: str,
        automation_id: str,
        authorization: str,
        *,
        body: PublicationsAutomationsJourneysRequest | PublicationsAutomationsJourneysRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[AutomationJourneysResponse, Create2ErrorBody]:
        """Add an existing subscription to an automation flow. Requires the automation to have an active *Add by API*
        trigger. The specified ``email`` or ``subscription_id`` will be matched against your existing subscribers. If an
        existing subscriber is found, they will be enrolled immediately. Looking to enroll new subscribers? Use the
        **Create Subscription** endpoint instead and specify the ``automation_ids`` param.

        Args:
            publication_id: The prefixed ID of the publication object
            automation_id: The prefixed ID of the automation object
            authorization: Bearer authentication
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/publications/{publicationId}/automations/{automationId}/journeys"),
            path_params=[param[str]("publicationId", publication_id), param[str]("automationId", automation_id)],
            headers=[param[str]("Authorization", authorization), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PublicationsAutomationsJourneysRequest | PublicationsAutomationsJourneysRequestDict | None](
                body
            ),
            decoder=async_json_decoder[AutomationJourneysResponse],
            error_mapper=create2_error_mapper,
            request_options=request_options,
        )

    async def index5(
        self,
        publication_id: str,
        automation_id: str,
        authorization: str,
        *,
        status: AutomationJourneysGetRequestStatusOrStr | None = AutomationJourneysGetRequestStatus.ALL,
        limit: int | None = None,
        page: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[AutomationJourneysIndexResponse, Index5ErrorBody]:
        """Retrieve a list of automation journeys that have occurred within a specific automation.

        Args:
            publication_id: The prefixed ID of the publication object
            automation_id: The prefixed ID of the automation object
            authorization: Bearer authentication
            status: Optionally filter the results by the automation journey's status.
            limit: A limit on the number of objects to be returned. The limit can range between 1 and 100, and the
                default is 10.
            page: Pagination returns the results in pages. Each page contains the number of results specified by the
                ``limit`` (default: 10).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/publications/{publicationId}/automations/{automationId}/journeys"),
            path_params=[param[str]("publicationId", publication_id), param[str]("automationId", automation_id)],
            query_params=[
                param[AutomationJourneysGetRequestStatusOrStr | None]("status", status),
                param[int | None]("limit", limit),
                param[int | None]("page", page),
            ],
            headers=[param[str]("Authorization", authorization)],
            decoder=async_json_decoder[AutomationJourneysIndexResponse],
            error_mapper=index5_error_mapper,
            request_options=request_options,
        )

    async def show2(
        self,
        publication_id: str,
        automation_id: str,
        automation_journey_id: str,
        authorization: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[AutomationJourneysResponse, Show2ErrorBody]:
        """Retrieve a single automation journey by ID.

        Args:
            publication_id: The prefixed ID of the publication object
            automation_id: The prefixed ID of the automation object
            automation_journey_id: The prefixed automation journey id
            authorization: Bearer authentication
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default(
                "/publications/{publicationId}/automations/{automationId}/journeys/{automationJourneyId}"
            ),
            path_params=[
                param[str]("publicationId", publication_id),
                param[str]("automationId", automation_id),
                param[str]("automationJourneyId", automation_journey_id),
            ],
            headers=[param[str]("Authorization", authorization)],
            decoder=async_json_decoder[AutomationJourneysResponse],
            error_mapper=show2_error_mapper,
            request_options=request_options,
        )
