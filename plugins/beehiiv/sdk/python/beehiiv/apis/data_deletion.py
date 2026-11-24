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
from ..errors.create5_error import Create5ErrorBody, create5_error_mapper
from ..errors.index11_error import Index11ErrorBody, index11_error_mapper
from ..errors.show8_error import Show8ErrorBody, show8_error_mapper
from ..models.data_deletion_request_index_response import DataDeletionRequestIndexResponse
from ..models.data_deletion_request_response import DataDeletionRequestResponse
from ..models.publications_data_privacy_deletion_requests_request import (
    PublicationsDataPrivacyDeletionRequestsRequest,
    PublicationsDataPrivacyDeletionRequestsRequestDict,
)
from ..server.server import Server


class DataDeletion:
    def __init__(self, client: RawClient, server: Server) -> None:
        self._with_raw_response = DataDeletionWithRawResponse(client, server)

    def create5(
        self,
        publication_id: str,
        authorization: str,
        *,
        body: (
            PublicationsDataPrivacyDeletionRequestsRequest | PublicationsDataPrivacyDeletionRequestsRequestDict | None
        ) = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> DataDeletionRequestResponse:
        """This is a gated feature that requires enablement. Contact support to enable Data Deletion API access for your
        organization.

        Creates a data deletion request for a subscriber within your organization. The subscriber's data will be
        redacted from all publications in the organization after a 14-day safety delay. This action cannot be undone
        once processing begins.

        API keys restricted to specific publications cannot access this endpoint and will receive a 403 response, since
        deletion requests apply to the entire workspace.

        Args:
            publication_id: The prefixed ID of the publication object
            authorization: Bearer authentication
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Created

        Raises:
            ApiError: Bad Request Unauthorized. The API key or OAuth access token is missing, invalid, or expired.
                Forbidden Resource Not Found Conflict Rate Limit Exceeded Internal Server Error ``error`` is ``Error |
                RawError``."""
        return unwrap(
            self._with_raw_response.create5(publication_id, authorization, body=body, request_options=request_options)
        )

    def index11(
        self, publication_id: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> DataDeletionRequestIndexResponse:
        """This is a gated feature that requires enablement. Contact support to enable Data Deletion API access for your
        organization.

        List all data deletion requests for your organization.

        API keys restricted to specific publications cannot access this endpoint and will receive a 403 response, since
        deletion requests apply to the entire workspace.

        Args:
            publication_id: The prefixed ID of the publication object
            authorization: Bearer authentication
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Unauthorized. The API key or OAuth access token is missing, invalid, or expired. Forbidden
                Resource Not Found Rate Limit Exceeded Internal Server Error ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.index11(publication_id, authorization, request_options=request_options))

    def show8(
        self, publication_id: str, id_: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> DataDeletionRequestResponse:
        """This is a gated feature that requires enablement. Contact support to enable Data Deletion API access for your
        organization.

        Retrieve the details and current status of a specific data deletion request.

        API keys restricted to specific publications cannot access this endpoint and will receive a 403 response, since
        deletion requests apply to the entire workspace.

        Args:
            publication_id: The prefixed ID of the publication object
            id_: The ID of the data deletion request
            authorization: Bearer authentication
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Unauthorized. The API key or OAuth access token is missing, invalid, or expired. Forbidden
                Resource Not Found Rate Limit Exceeded Internal Server Error ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.show8(publication_id, id_, authorization, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> DataDeletionWithRawResponse:
        return self._with_raw_response


class AsyncDataDeletion:
    def __init__(self, client: AsyncRawClient, server: Server) -> None:
        self._with_raw_response = AsyncDataDeletionWithRawResponse(client, server)

    async def create5(
        self,
        publication_id: str,
        authorization: str,
        *,
        body: (
            PublicationsDataPrivacyDeletionRequestsRequest | PublicationsDataPrivacyDeletionRequestsRequestDict | None
        ) = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> DataDeletionRequestResponse:
        """This is a gated feature that requires enablement. Contact support to enable Data Deletion API access for your
        organization.

        Creates a data deletion request for a subscriber within your organization. The subscriber's data will be
        redacted from all publications in the organization after a 14-day safety delay. This action cannot be undone
        once processing begins.

        API keys restricted to specific publications cannot access this endpoint and will receive a 403 response, since
        deletion requests apply to the entire workspace.

        Args:
            publication_id: The prefixed ID of the publication object
            authorization: Bearer authentication
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Created

        Raises:
            ApiError: Bad Request Unauthorized. The API key or OAuth access token is missing, invalid, or expired.
                Forbidden Resource Not Found Conflict Rate Limit Exceeded Internal Server Error ``error`` is ``Error |
                RawError``."""
        return unwrap(
            await self._with_raw_response.create5(
                publication_id, authorization, body=body, request_options=request_options
            ),
        )

    async def index11(
        self, publication_id: str, authorization: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> DataDeletionRequestIndexResponse:
        """This is a gated feature that requires enablement. Contact support to enable Data Deletion API access for your
        organization.

        List all data deletion requests for your organization.

        API keys restricted to specific publications cannot access this endpoint and will receive a 403 response, since
        deletion requests apply to the entire workspace.

        Args:
            publication_id: The prefixed ID of the publication object
            authorization: Bearer authentication
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Unauthorized. The API key or OAuth access token is missing, invalid, or expired. Forbidden
                Resource Not Found Rate Limit Exceeded Internal Server Error ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.index11(publication_id, authorization, request_options=request_options)
        )

    async def show8(
        self,
        publication_id: str,
        id_: str,
        authorization: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> DataDeletionRequestResponse:
        """This is a gated feature that requires enablement. Contact support to enable Data Deletion API access for your
        organization.

        Retrieve the details and current status of a specific data deletion request.

        API keys restricted to specific publications cannot access this endpoint and will receive a 403 response, since
        deletion requests apply to the entire workspace.

        Args:
            publication_id: The prefixed ID of the publication object
            id_: The ID of the data deletion request
            authorization: Bearer authentication
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Unauthorized. The API key or OAuth access token is missing, invalid, or expired. Forbidden
                Resource Not Found Rate Limit Exceeded Internal Server Error ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.show8(publication_id, id_, authorization, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> AsyncDataDeletionWithRawResponse:
        return self._with_raw_response


class DataDeletionWithRawResponse(BaseRawResponse[RawClient, Server]):
    def create5(
        self,
        publication_id: str,
        authorization: str,
        *,
        body: (
            PublicationsDataPrivacyDeletionRequestsRequest | PublicationsDataPrivacyDeletionRequestsRequestDict | None
        ) = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[DataDeletionRequestResponse, Create5ErrorBody]:
        """This is a gated feature that requires enablement. Contact support to enable Data Deletion API access for your
        organization.

        Creates a data deletion request for a subscriber within your organization. The subscriber's data will be
        redacted from all publications in the organization after a 14-day safety delay. This action cannot be undone
        once processing begins.

        API keys restricted to specific publications cannot access this endpoint and will receive a 403 response, since
        deletion requests apply to the entire workspace.

        Args:
            publication_id: The prefixed ID of the publication object
            authorization: Bearer authentication
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/publications/{publicationId}/data_privacy/deletion_requests"),
            path_params=[param[str]("publicationId", publication_id)],
            headers=[param[str]("Authorization", authorization), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[
                (
                    PublicationsDataPrivacyDeletionRequestsRequest
                    | PublicationsDataPrivacyDeletionRequestsRequestDict
                    | None
                )
            ](body),
            decoder=json_decoder[DataDeletionRequestResponse],
            error_mapper=create5_error_mapper,
            request_options=request_options,
        )

    def index11(
        self, publication_id: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[DataDeletionRequestIndexResponse, Index11ErrorBody]:
        """This is a gated feature that requires enablement. Contact support to enable Data Deletion API access for your
        organization.

        List all data deletion requests for your organization.

        API keys restricted to specific publications cannot access this endpoint and will receive a 403 response, since
        deletion requests apply to the entire workspace.

        Args:
            publication_id: The prefixed ID of the publication object
            authorization: Bearer authentication
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/publications/{publicationId}/data_privacy/deletion_requests"),
            path_params=[param[str]("publicationId", publication_id)],
            headers=[param[str]("Authorization", authorization)],
            decoder=json_decoder[DataDeletionRequestIndexResponse],
            error_mapper=index11_error_mapper,
            request_options=request_options,
        )

    def show8(
        self, publication_id: str, id_: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[DataDeletionRequestResponse, Show8ErrorBody]:
        """This is a gated feature that requires enablement. Contact support to enable Data Deletion API access for your
        organization.

        Retrieve the details and current status of a specific data deletion request.

        API keys restricted to specific publications cannot access this endpoint and will receive a 403 response, since
        deletion requests apply to the entire workspace.

        Args:
            publication_id: The prefixed ID of the publication object
            id_: The ID of the data deletion request
            authorization: Bearer authentication
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/publications/{publicationId}/data_privacy/deletion_requests/{id}"),
            path_params=[param[str]("publicationId", publication_id), param[str]("id", id_)],
            headers=[param[str]("Authorization", authorization)],
            decoder=json_decoder[DataDeletionRequestResponse],
            error_mapper=show8_error_mapper,
            request_options=request_options,
        )


class AsyncDataDeletionWithRawResponse(BaseRawResponse[AsyncRawClient, Server]):
    async def create5(
        self,
        publication_id: str,
        authorization: str,
        *,
        body: (
            PublicationsDataPrivacyDeletionRequestsRequest | PublicationsDataPrivacyDeletionRequestsRequestDict | None
        ) = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[DataDeletionRequestResponse, Create5ErrorBody]:
        """This is a gated feature that requires enablement. Contact support to enable Data Deletion API access for your
        organization.

        Creates a data deletion request for a subscriber within your organization. The subscriber's data will be
        redacted from all publications in the organization after a 14-day safety delay. This action cannot be undone
        once processing begins.

        API keys restricted to specific publications cannot access this endpoint and will receive a 403 response, since
        deletion requests apply to the entire workspace.

        Args:
            publication_id: The prefixed ID of the publication object
            authorization: Bearer authentication
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/publications/{publicationId}/data_privacy/deletion_requests"),
            path_params=[param[str]("publicationId", publication_id)],
            headers=[param[str]("Authorization", authorization), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[
                (
                    PublicationsDataPrivacyDeletionRequestsRequest
                    | PublicationsDataPrivacyDeletionRequestsRequestDict
                    | None
                )
            ](body),
            decoder=async_json_decoder[DataDeletionRequestResponse],
            error_mapper=create5_error_mapper,
            request_options=request_options,
        )

    async def index11(
        self, publication_id: str, authorization: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[DataDeletionRequestIndexResponse, Index11ErrorBody]:
        """This is a gated feature that requires enablement. Contact support to enable Data Deletion API access for your
        organization.

        List all data deletion requests for your organization.

        API keys restricted to specific publications cannot access this endpoint and will receive a 403 response, since
        deletion requests apply to the entire workspace.

        Args:
            publication_id: The prefixed ID of the publication object
            authorization: Bearer authentication
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/publications/{publicationId}/data_privacy/deletion_requests"),
            path_params=[param[str]("publicationId", publication_id)],
            headers=[param[str]("Authorization", authorization)],
            decoder=async_json_decoder[DataDeletionRequestIndexResponse],
            error_mapper=index11_error_mapper,
            request_options=request_options,
        )

    async def show8(
        self,
        publication_id: str,
        id_: str,
        authorization: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[DataDeletionRequestResponse, Show8ErrorBody]:
        """This is a gated feature that requires enablement. Contact support to enable Data Deletion API access for your
        organization.

        Retrieve the details and current status of a specific data deletion request.

        API keys restricted to specific publications cannot access this endpoint and will receive a 403 response, since
        deletion requests apply to the entire workspace.

        Args:
            publication_id: The prefixed ID of the publication object
            id_: The ID of the data deletion request
            authorization: Bearer authentication
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/publications/{publicationId}/data_privacy/deletion_requests/{id}"),
            path_params=[param[str]("publicationId", publication_id), param[str]("id", id_)],
            headers=[param[str]("Authorization", authorization)],
            decoder=async_json_decoder[DataDeletionRequestResponse],
            error_mapper=show8_error_mapper,
            request_options=request_options,
        )
