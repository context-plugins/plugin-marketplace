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
from ..errors.create13_error import Create13ErrorBody, create13_error_mapper
from ..errors.delete6_error import Delete6ErrorBody, delete6_error_mapper
from ..errors.index22_error import Index22ErrorBody, index22_error_mapper
from ..errors.show17_error import Show17ErrorBody, show17_error_mapper
from ..errors.update4_error import Update4ErrorBody, update4_error_mapper
from ..models.index_webhooks_response import IndexWebhooksResponse
from ..models.publications_webhooks_request import PublicationsWebhooksRequest, PublicationsWebhooksRequestDict
from ..models.publications_webhooks_request1 import PublicationsWebhooksRequest1, PublicationsWebhooksRequest1Dict
from ..models.webhook_response import WebhookResponse
from ..models.webhooks_delete_response import WebhooksDeleteResponse
from ..server.server import Server


class WebhooksApi:
    def __init__(self, client: RawClient, server: Server) -> None:
        self._with_raw_response = WebhooksApiWithRawResponse(client, server)

    def create13(
        self,
        publication_id: str,
        authorization: str,
        *,
        body: PublicationsWebhooksRequest | PublicationsWebhooksRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> WebhookResponse:
        """Create a new webhook for a given publication.

        Args:
            publication_id: The prefixed ID of the publication object
            authorization: Bearer authentication
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Webhook created

        Raises:
            ApiError: Bad Request Unauthorized. The API key or OAuth access token is missing, invalid, or expired.
                Resource Not Found Rate Limit Exceeded Internal Server Error ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.create13(publication_id, authorization, body=body, request_options=request_options)
        )

    def delete6(
        self,
        publication_id: str,
        endpoint_id: str,
        authorization: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> WebhooksDeleteResponse:
        """Delete a webhook subscription from a publication.

        Args:
            publication_id: The prefixed ID of the publication object
            endpoint_id: The prefixed ID of the webhook object
            authorization: Bearer authentication
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            No Content

        Raises:
            ApiError: Bad Request Unauthorized. The API key or OAuth access token is missing, invalid, or expired.
                Resource Not Found Rate Limit Exceeded Internal Server Error ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.delete6(publication_id, endpoint_id, authorization, request_options=request_options)
        )

    def index22(
        self,
        publication_id: str,
        authorization: str,
        *,
        limit: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> IndexWebhooksResponse:
        """Retrieve all webhooks belonging to a specific publication.

        Args:
            publication_id: The prefixed ID of the publication object
            authorization: Bearer authentication
            limit: A limit on the number of objects to be returned. The limit can range between 1 and 100, and the
                default is 10.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Bad Request Unauthorized. The API key or OAuth access token is missing, invalid, or expired.
                Resource Not Found Rate Limit Exceeded Internal Server Error ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.index22(publication_id, authorization, limit=limit, request_options=request_options)
        )

    def show17(
        self,
        publication_id: str,
        endpoint_id: str,
        authorization: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> WebhookResponse:
        """Retrieve a specific webhook belonging to a publication.

        Args:
            publication_id: The prefixed ID of the publication object
            endpoint_id: The prefixed ID of the webhook object
            authorization: Bearer authentication
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Bad Request Unauthorized. The API key or OAuth access token is missing, invalid, or expired.
                Resource Not Found Unprocessable Entity Rate Limit Exceeded Internal Server Error ``error`` is ``Error |
                RawError``."""
        return unwrap(
            self._with_raw_response.show17(publication_id, endpoint_id, authorization, request_options=request_options)
        )

    def update4(
        self,
        publication_id: str,
        endpoint_id: str,
        authorization: str,
        *,
        body: PublicationsWebhooksRequest1 | PublicationsWebhooksRequest1Dict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> WebhookResponse:
        """Update a webhook subscription for a publication.

        Args:
            publication_id: The prefixed ID of the publication object
            endpoint_id: The prefixed ID of the webhook object
            authorization: Bearer authentication
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Bad Request Unauthorized. The API key or OAuth access token is missing, invalid, or expired.
                Resource Not Found Rate Limit Exceeded Internal Server Error ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.update4(
                publication_id, endpoint_id, authorization, body=body, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> WebhooksApiWithRawResponse:
        return self._with_raw_response


class AsyncWebhooksApi:
    def __init__(self, client: AsyncRawClient, server: Server) -> None:
        self._with_raw_response = AsyncWebhooksApiWithRawResponse(client, server)

    async def create13(
        self,
        publication_id: str,
        authorization: str,
        *,
        body: PublicationsWebhooksRequest | PublicationsWebhooksRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> WebhookResponse:
        """Create a new webhook for a given publication.

        Args:
            publication_id: The prefixed ID of the publication object
            authorization: Bearer authentication
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Webhook created

        Raises:
            ApiError: Bad Request Unauthorized. The API key or OAuth access token is missing, invalid, or expired.
                Resource Not Found Rate Limit Exceeded Internal Server Error ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.create13(
                publication_id, authorization, body=body, request_options=request_options
            ),
        )

    async def delete6(
        self,
        publication_id: str,
        endpoint_id: str,
        authorization: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> WebhooksDeleteResponse:
        """Delete a webhook subscription from a publication.

        Args:
            publication_id: The prefixed ID of the publication object
            endpoint_id: The prefixed ID of the webhook object
            authorization: Bearer authentication
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            No Content

        Raises:
            ApiError: Bad Request Unauthorized. The API key or OAuth access token is missing, invalid, or expired.
                Resource Not Found Rate Limit Exceeded Internal Server Error ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.delete6(
                publication_id, endpoint_id, authorization, request_options=request_options
            ),
        )

    async def index22(
        self,
        publication_id: str,
        authorization: str,
        *,
        limit: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> IndexWebhooksResponse:
        """Retrieve all webhooks belonging to a specific publication.

        Args:
            publication_id: The prefixed ID of the publication object
            authorization: Bearer authentication
            limit: A limit on the number of objects to be returned. The limit can range between 1 and 100, and the
                default is 10.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Bad Request Unauthorized. The API key or OAuth access token is missing, invalid, or expired.
                Resource Not Found Rate Limit Exceeded Internal Server Error ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.index22(
                publication_id, authorization, limit=limit, request_options=request_options
            ),
        )

    async def show17(
        self,
        publication_id: str,
        endpoint_id: str,
        authorization: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> WebhookResponse:
        """Retrieve a specific webhook belonging to a publication.

        Args:
            publication_id: The prefixed ID of the publication object
            endpoint_id: The prefixed ID of the webhook object
            authorization: Bearer authentication
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Bad Request Unauthorized. The API key or OAuth access token is missing, invalid, or expired.
                Resource Not Found Unprocessable Entity Rate Limit Exceeded Internal Server Error ``error`` is ``Error |
                RawError``."""
        return unwrap(
            await self._with_raw_response.show17(
                publication_id, endpoint_id, authorization, request_options=request_options
            ),
        )

    async def update4(
        self,
        publication_id: str,
        endpoint_id: str,
        authorization: str,
        *,
        body: PublicationsWebhooksRequest1 | PublicationsWebhooksRequest1Dict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> WebhookResponse:
        """Update a webhook subscription for a publication.

        Args:
            publication_id: The prefixed ID of the publication object
            endpoint_id: The prefixed ID of the webhook object
            authorization: Bearer authentication
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Bad Request Unauthorized. The API key or OAuth access token is missing, invalid, or expired.
                Resource Not Found Rate Limit Exceeded Internal Server Error ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.update4(
                publication_id, endpoint_id, authorization, body=body, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncWebhooksApiWithRawResponse:
        return self._with_raw_response


class WebhooksApiWithRawResponse(BaseRawResponse[RawClient, Server]):
    def create13(
        self,
        publication_id: str,
        authorization: str,
        *,
        body: PublicationsWebhooksRequest | PublicationsWebhooksRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[WebhookResponse, Create13ErrorBody]:
        """Create a new webhook for a given publication.

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
            url_template=self._server.default("/publications/{publicationId}/webhooks"),
            path_params=[param[str]("publicationId", publication_id)],
            headers=[param[str]("Authorization", authorization), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PublicationsWebhooksRequest | PublicationsWebhooksRequestDict | None](body),
            decoder=json_decoder[WebhookResponse],
            error_mapper=create13_error_mapper,
            request_options=request_options,
        )

    def delete6(
        self,
        publication_id: str,
        endpoint_id: str,
        authorization: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[WebhooksDeleteResponse, Delete6ErrorBody]:
        """Delete a webhook subscription from a publication.

        Args:
            publication_id: The prefixed ID of the publication object
            endpoint_id: The prefixed ID of the webhook object
            authorization: Bearer authentication
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/publications/{publicationId}/webhooks/{endpointId}"),
            path_params=[param[str]("publicationId", publication_id), param[str]("endpointId", endpoint_id)],
            headers=[param[str]("Authorization", authorization), param[UUID]("Idempotency-Key", uuid4())],
            decoder=json_decoder[WebhooksDeleteResponse],
            error_mapper=delete6_error_mapper,
            request_options=request_options,
        )

    def index22(
        self,
        publication_id: str,
        authorization: str,
        *,
        limit: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[IndexWebhooksResponse, Index22ErrorBody]:
        """Retrieve all webhooks belonging to a specific publication.

        Args:
            publication_id: The prefixed ID of the publication object
            authorization: Bearer authentication
            limit: A limit on the number of objects to be returned. The limit can range between 1 and 100, and the
                default is 10.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/publications/{publicationId}/webhooks"),
            path_params=[param[str]("publicationId", publication_id)],
            query_params=[param[int | None]("limit", limit)],
            headers=[param[str]("Authorization", authorization)],
            decoder=json_decoder[IndexWebhooksResponse],
            error_mapper=index22_error_mapper,
            request_options=request_options,
        )

    def show17(
        self,
        publication_id: str,
        endpoint_id: str,
        authorization: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[WebhookResponse, Show17ErrorBody]:
        """Retrieve a specific webhook belonging to a publication.

        Args:
            publication_id: The prefixed ID of the publication object
            endpoint_id: The prefixed ID of the webhook object
            authorization: Bearer authentication
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/publications/{publicationId}/webhooks/{endpointId}"),
            path_params=[param[str]("publicationId", publication_id), param[str]("endpointId", endpoint_id)],
            headers=[param[str]("Authorization", authorization)],
            decoder=json_decoder[WebhookResponse],
            error_mapper=show17_error_mapper,
            request_options=request_options,
        )

    def update4(
        self,
        publication_id: str,
        endpoint_id: str,
        authorization: str,
        *,
        body: PublicationsWebhooksRequest1 | PublicationsWebhooksRequest1Dict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[WebhookResponse, Update4ErrorBody]:
        """Update a webhook subscription for a publication.

        Args:
            publication_id: The prefixed ID of the publication object
            endpoint_id: The prefixed ID of the webhook object
            authorization: Bearer authentication
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/publications/{publicationId}/webhooks/{endpointId}"),
            path_params=[param[str]("publicationId", publication_id), param[str]("endpointId", endpoint_id)],
            headers=[param[str]("Authorization", authorization), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PublicationsWebhooksRequest1 | PublicationsWebhooksRequest1Dict | None](body),
            decoder=json_decoder[WebhookResponse],
            error_mapper=update4_error_mapper,
            request_options=request_options,
        )


class AsyncWebhooksApiWithRawResponse(BaseRawResponse[AsyncRawClient, Server]):
    async def create13(
        self,
        publication_id: str,
        authorization: str,
        *,
        body: PublicationsWebhooksRequest | PublicationsWebhooksRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[WebhookResponse, Create13ErrorBody]:
        """Create a new webhook for a given publication.

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
            url_template=self._server.default("/publications/{publicationId}/webhooks"),
            path_params=[param[str]("publicationId", publication_id)],
            headers=[param[str]("Authorization", authorization), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PublicationsWebhooksRequest | PublicationsWebhooksRequestDict | None](body),
            decoder=async_json_decoder[WebhookResponse],
            error_mapper=create13_error_mapper,
            request_options=request_options,
        )

    async def delete6(
        self,
        publication_id: str,
        endpoint_id: str,
        authorization: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[WebhooksDeleteResponse, Delete6ErrorBody]:
        """Delete a webhook subscription from a publication.

        Args:
            publication_id: The prefixed ID of the publication object
            endpoint_id: The prefixed ID of the webhook object
            authorization: Bearer authentication
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/publications/{publicationId}/webhooks/{endpointId}"),
            path_params=[param[str]("publicationId", publication_id), param[str]("endpointId", endpoint_id)],
            headers=[param[str]("Authorization", authorization), param[UUID]("Idempotency-Key", uuid4())],
            decoder=async_json_decoder[WebhooksDeleteResponse],
            error_mapper=delete6_error_mapper,
            request_options=request_options,
        )

    async def index22(
        self,
        publication_id: str,
        authorization: str,
        *,
        limit: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[IndexWebhooksResponse, Index22ErrorBody]:
        """Retrieve all webhooks belonging to a specific publication.

        Args:
            publication_id: The prefixed ID of the publication object
            authorization: Bearer authentication
            limit: A limit on the number of objects to be returned. The limit can range between 1 and 100, and the
                default is 10.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/publications/{publicationId}/webhooks"),
            path_params=[param[str]("publicationId", publication_id)],
            query_params=[param[int | None]("limit", limit)],
            headers=[param[str]("Authorization", authorization)],
            decoder=async_json_decoder[IndexWebhooksResponse],
            error_mapper=index22_error_mapper,
            request_options=request_options,
        )

    async def show17(
        self,
        publication_id: str,
        endpoint_id: str,
        authorization: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[WebhookResponse, Show17ErrorBody]:
        """Retrieve a specific webhook belonging to a publication.

        Args:
            publication_id: The prefixed ID of the publication object
            endpoint_id: The prefixed ID of the webhook object
            authorization: Bearer authentication
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/publications/{publicationId}/webhooks/{endpointId}"),
            path_params=[param[str]("publicationId", publication_id), param[str]("endpointId", endpoint_id)],
            headers=[param[str]("Authorization", authorization)],
            decoder=async_json_decoder[WebhookResponse],
            error_mapper=show17_error_mapper,
            request_options=request_options,
        )

    async def update4(
        self,
        publication_id: str,
        endpoint_id: str,
        authorization: str,
        *,
        body: PublicationsWebhooksRequest1 | PublicationsWebhooksRequest1Dict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[WebhookResponse, Update4ErrorBody]:
        """Update a webhook subscription for a publication.

        Args:
            publication_id: The prefixed ID of the publication object
            endpoint_id: The prefixed ID of the webhook object
            authorization: Bearer authentication
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/publications/{publicationId}/webhooks/{endpointId}"),
            path_params=[param[str]("publicationId", publication_id), param[str]("endpointId", endpoint_id)],
            headers=[param[str]("Authorization", authorization), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PublicationsWebhooksRequest1 | PublicationsWebhooksRequest1Dict | None](body),
            decoder=async_json_decoder[WebhookResponse],
            error_mapper=update4_error_mapper,
            request_options=request_options,
        )
