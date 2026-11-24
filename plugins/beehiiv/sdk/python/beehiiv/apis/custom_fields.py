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
from ..errors.create4_error import Create4ErrorBody, create4_error_mapper
from ..errors.delete_error import DeleteErrorBody, delete_error_mapper
from ..errors.index10_error import Index10ErrorBody, index10_error_mapper
from ..errors.patch2_error import Patch2ErrorBody, patch2_error_mapper
from ..errors.put2_error import Put2ErrorBody, put2_error_mapper
from ..errors.show7_error import Show7ErrorBody, show7_error_mapper
from ..models.custom_field_index_response import CustomFieldIndexResponse
from ..models.custom_field_response import CustomFieldResponse
from ..models.custom_fields_delete_response import CustomFieldsDeleteResponse
from ..models.custom_fields_patch_response import CustomFieldsPatchResponse
from ..models.publications_custom_fields_request import (
    PublicationsCustomFieldsRequest,
    PublicationsCustomFieldsRequestDict,
)
from ..models.publications_custom_fields_request1 import (
    PublicationsCustomFieldsRequest1,
    PublicationsCustomFieldsRequest1Dict,
)
from ..server.server import Server


class CustomFields:
    def __init__(self, client: RawClient, server: Server) -> None:
        self._with_raw_response = CustomFieldsWithRawResponse(client, server)

    def create4(
        self,
        publication_id: str,
        authorization: str,
        *,
        body: PublicationsCustomFieldsRequest | PublicationsCustomFieldsRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> CustomFieldResponse:
        """Create a custom field on a publication, for use in subscriptions.

        Args:
            publication_id: The prefixed ID of the publication object
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
            self._with_raw_response.create4(publication_id, authorization, body=body, request_options=request_options)
        )

    def delete(
        self, publication_id: str, id_: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> CustomFieldsDeleteResponse:
        """Delete a custom field from a publication.

        Args:
            publication_id: The prefixed ID of the publication object
            id_: The ID of the Custom Fields object
            authorization: Bearer authentication
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            No Content

        Raises:
            ApiError: Bad Request Unauthorized. The API key or OAuth access token is missing, invalid, or expired.
                Resource Not Found Rate Limit Exceeded Internal Server Error ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.delete(publication_id, id_, authorization, request_options=request_options)
        )

    def index10(
        self, publication_id: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> CustomFieldIndexResponse:
        """List all custom fields on a publication.

        Args:
            publication_id: The prefixed ID of the publication object
            authorization: Bearer authentication
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Bad Request Unauthorized. The API key or OAuth access token is missing, invalid, or expired.
                Resource Not Found Rate Limit Exceeded Internal Server Error ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.index10(publication_id, authorization, request_options=request_options))

    def patch2(
        self,
        publication_id: str,
        id_: str,
        authorization: str,
        *,
        body: PublicationsCustomFieldsRequest1 | PublicationsCustomFieldsRequest1Dict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> CustomFieldsPatchResponse:
        """Update a custom field on a publication.

        Args:
            publication_id: The prefixed ID of the publication object
            id_: The ID of the Custom Fields object
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
            self._with_raw_response.patch2(
                publication_id, id_, authorization, body=body, request_options=request_options
            ),
        )

    def put2(
        self,
        publication_id: str,
        id_: str,
        authorization: str,
        *,
        body: PublicationsCustomFieldsRequest1 | PublicationsCustomFieldsRequest1Dict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> CustomFieldResponse:
        """Update a custom field on a publication.

        Args:
            publication_id: The prefixed ID of the publication object
            id_: The ID of the Custom Fields object
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
            self._with_raw_response.put2(publication_id, id_, authorization, body=body, request_options=request_options)
        )

    def show7(
        self, publication_id: str, id_: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> CustomFieldResponse:
        """View a specific custom field on a publication.

        Args:
            publication_id: The prefixed ID of the publication object
            id_: The ID of the Custom Fields object
            authorization: Bearer authentication
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Bad Request Unauthorized. The API key or OAuth access token is missing, invalid, or expired.
                Resource Not Found Rate Limit Exceeded Internal Server Error ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.show7(publication_id, id_, authorization, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> CustomFieldsWithRawResponse:
        return self._with_raw_response


class AsyncCustomFields:
    def __init__(self, client: AsyncRawClient, server: Server) -> None:
        self._with_raw_response = AsyncCustomFieldsWithRawResponse(client, server)

    async def create4(
        self,
        publication_id: str,
        authorization: str,
        *,
        body: PublicationsCustomFieldsRequest | PublicationsCustomFieldsRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> CustomFieldResponse:
        """Create a custom field on a publication, for use in subscriptions.

        Args:
            publication_id: The prefixed ID of the publication object
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
            await self._with_raw_response.create4(
                publication_id, authorization, body=body, request_options=request_options
            ),
        )

    async def delete(
        self,
        publication_id: str,
        id_: str,
        authorization: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> CustomFieldsDeleteResponse:
        """Delete a custom field from a publication.

        Args:
            publication_id: The prefixed ID of the publication object
            id_: The ID of the Custom Fields object
            authorization: Bearer authentication
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            No Content

        Raises:
            ApiError: Bad Request Unauthorized. The API key or OAuth access token is missing, invalid, or expired.
                Resource Not Found Rate Limit Exceeded Internal Server Error ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.delete(publication_id, id_, authorization, request_options=request_options)
        )

    async def index10(
        self, publication_id: str, authorization: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> CustomFieldIndexResponse:
        """List all custom fields on a publication.

        Args:
            publication_id: The prefixed ID of the publication object
            authorization: Bearer authentication
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Bad Request Unauthorized. The API key or OAuth access token is missing, invalid, or expired.
                Resource Not Found Rate Limit Exceeded Internal Server Error ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.index10(publication_id, authorization, request_options=request_options)
        )

    async def patch2(
        self,
        publication_id: str,
        id_: str,
        authorization: str,
        *,
        body: PublicationsCustomFieldsRequest1 | PublicationsCustomFieldsRequest1Dict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> CustomFieldsPatchResponse:
        """Update a custom field on a publication.

        Args:
            publication_id: The prefixed ID of the publication object
            id_: The ID of the Custom Fields object
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
            await self._with_raw_response.patch2(
                publication_id, id_, authorization, body=body, request_options=request_options
            ),
        )

    async def put2(
        self,
        publication_id: str,
        id_: str,
        authorization: str,
        *,
        body: PublicationsCustomFieldsRequest1 | PublicationsCustomFieldsRequest1Dict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> CustomFieldResponse:
        """Update a custom field on a publication.

        Args:
            publication_id: The prefixed ID of the publication object
            id_: The ID of the Custom Fields object
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
            await self._with_raw_response.put2(
                publication_id, id_, authorization, body=body, request_options=request_options
            ),
        )

    async def show7(
        self,
        publication_id: str,
        id_: str,
        authorization: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> CustomFieldResponse:
        """View a specific custom field on a publication.

        Args:
            publication_id: The prefixed ID of the publication object
            id_: The ID of the Custom Fields object
            authorization: Bearer authentication
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Bad Request Unauthorized. The API key or OAuth access token is missing, invalid, or expired.
                Resource Not Found Rate Limit Exceeded Internal Server Error ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.show7(publication_id, id_, authorization, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> AsyncCustomFieldsWithRawResponse:
        return self._with_raw_response


class CustomFieldsWithRawResponse(BaseRawResponse[RawClient, Server]):
    def create4(
        self,
        publication_id: str,
        authorization: str,
        *,
        body: PublicationsCustomFieldsRequest | PublicationsCustomFieldsRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[CustomFieldResponse, Create4ErrorBody]:
        """Create a custom field on a publication, for use in subscriptions.

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
            url_template=self._server.default("/publications/{publicationId}/custom_fields"),
            path_params=[param[str]("publicationId", publication_id)],
            headers=[param[str]("Authorization", authorization), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PublicationsCustomFieldsRequest | PublicationsCustomFieldsRequestDict | None](body),
            decoder=json_decoder[CustomFieldResponse],
            error_mapper=create4_error_mapper,
            request_options=request_options,
        )

    def delete(
        self, publication_id: str, id_: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[CustomFieldsDeleteResponse, DeleteErrorBody]:
        """Delete a custom field from a publication.

        Args:
            publication_id: The prefixed ID of the publication object
            id_: The ID of the Custom Fields object
            authorization: Bearer authentication
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/publications/{publicationId}/custom_fields/{id}"),
            path_params=[param[str]("publicationId", publication_id), param[str]("id", id_)],
            headers=[param[str]("Authorization", authorization), param[UUID]("Idempotency-Key", uuid4())],
            decoder=json_decoder[CustomFieldsDeleteResponse],
            error_mapper=delete_error_mapper,
            request_options=request_options,
        )

    def index10(
        self, publication_id: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[CustomFieldIndexResponse, Index10ErrorBody]:
        """List all custom fields on a publication.

        Args:
            publication_id: The prefixed ID of the publication object
            authorization: Bearer authentication
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/publications/{publicationId}/custom_fields"),
            path_params=[param[str]("publicationId", publication_id)],
            headers=[param[str]("Authorization", authorization)],
            decoder=json_decoder[CustomFieldIndexResponse],
            error_mapper=index10_error_mapper,
            request_options=request_options,
        )

    def patch2(
        self,
        publication_id: str,
        id_: str,
        authorization: str,
        *,
        body: PublicationsCustomFieldsRequest1 | PublicationsCustomFieldsRequest1Dict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[CustomFieldsPatchResponse, Patch2ErrorBody]:
        """Update a custom field on a publication.

        Args:
            publication_id: The prefixed ID of the publication object
            id_: The ID of the Custom Fields object
            authorization: Bearer authentication
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/publications/{publicationId}/custom_fields/{id}"),
            path_params=[param[str]("publicationId", publication_id), param[str]("id", id_)],
            headers=[param[str]("Authorization", authorization), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PublicationsCustomFieldsRequest1 | PublicationsCustomFieldsRequest1Dict | None](body),
            decoder=json_decoder[CustomFieldsPatchResponse],
            error_mapper=patch2_error_mapper,
            request_options=request_options,
        )

    def put2(
        self,
        publication_id: str,
        id_: str,
        authorization: str,
        *,
        body: PublicationsCustomFieldsRequest1 | PublicationsCustomFieldsRequest1Dict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[CustomFieldResponse, Put2ErrorBody]:
        """Update a custom field on a publication.

        Args:
            publication_id: The prefixed ID of the publication object
            id_: The ID of the Custom Fields object
            authorization: Bearer authentication
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/publications/{publicationId}/custom_fields/{id}"),
            path_params=[param[str]("publicationId", publication_id), param[str]("id", id_)],
            headers=[param[str]("Authorization", authorization), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PublicationsCustomFieldsRequest1 | PublicationsCustomFieldsRequest1Dict | None](body),
            decoder=json_decoder[CustomFieldResponse],
            error_mapper=put2_error_mapper,
            request_options=request_options,
        )

    def show7(
        self, publication_id: str, id_: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[CustomFieldResponse, Show7ErrorBody]:
        """View a specific custom field on a publication.

        Args:
            publication_id: The prefixed ID of the publication object
            id_: The ID of the Custom Fields object
            authorization: Bearer authentication
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/publications/{publicationId}/custom_fields/{id}"),
            path_params=[param[str]("publicationId", publication_id), param[str]("id", id_)],
            headers=[param[str]("Authorization", authorization)],
            decoder=json_decoder[CustomFieldResponse],
            error_mapper=show7_error_mapper,
            request_options=request_options,
        )


class AsyncCustomFieldsWithRawResponse(BaseRawResponse[AsyncRawClient, Server]):
    async def create4(
        self,
        publication_id: str,
        authorization: str,
        *,
        body: PublicationsCustomFieldsRequest | PublicationsCustomFieldsRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[CustomFieldResponse, Create4ErrorBody]:
        """Create a custom field on a publication, for use in subscriptions.

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
            url_template=self._server.default("/publications/{publicationId}/custom_fields"),
            path_params=[param[str]("publicationId", publication_id)],
            headers=[param[str]("Authorization", authorization), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PublicationsCustomFieldsRequest | PublicationsCustomFieldsRequestDict | None](body),
            decoder=async_json_decoder[CustomFieldResponse],
            error_mapper=create4_error_mapper,
            request_options=request_options,
        )

    async def delete(
        self,
        publication_id: str,
        id_: str,
        authorization: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[CustomFieldsDeleteResponse, DeleteErrorBody]:
        """Delete a custom field from a publication.

        Args:
            publication_id: The prefixed ID of the publication object
            id_: The ID of the Custom Fields object
            authorization: Bearer authentication
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/publications/{publicationId}/custom_fields/{id}"),
            path_params=[param[str]("publicationId", publication_id), param[str]("id", id_)],
            headers=[param[str]("Authorization", authorization), param[UUID]("Idempotency-Key", uuid4())],
            decoder=async_json_decoder[CustomFieldsDeleteResponse],
            error_mapper=delete_error_mapper,
            request_options=request_options,
        )

    async def index10(
        self, publication_id: str, authorization: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[CustomFieldIndexResponse, Index10ErrorBody]:
        """List all custom fields on a publication.

        Args:
            publication_id: The prefixed ID of the publication object
            authorization: Bearer authentication
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/publications/{publicationId}/custom_fields"),
            path_params=[param[str]("publicationId", publication_id)],
            headers=[param[str]("Authorization", authorization)],
            decoder=async_json_decoder[CustomFieldIndexResponse],
            error_mapper=index10_error_mapper,
            request_options=request_options,
        )

    async def patch2(
        self,
        publication_id: str,
        id_: str,
        authorization: str,
        *,
        body: PublicationsCustomFieldsRequest1 | PublicationsCustomFieldsRequest1Dict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[CustomFieldsPatchResponse, Patch2ErrorBody]:
        """Update a custom field on a publication.

        Args:
            publication_id: The prefixed ID of the publication object
            id_: The ID of the Custom Fields object
            authorization: Bearer authentication
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/publications/{publicationId}/custom_fields/{id}"),
            path_params=[param[str]("publicationId", publication_id), param[str]("id", id_)],
            headers=[param[str]("Authorization", authorization), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PublicationsCustomFieldsRequest1 | PublicationsCustomFieldsRequest1Dict | None](body),
            decoder=async_json_decoder[CustomFieldsPatchResponse],
            error_mapper=patch2_error_mapper,
            request_options=request_options,
        )

    async def put2(
        self,
        publication_id: str,
        id_: str,
        authorization: str,
        *,
        body: PublicationsCustomFieldsRequest1 | PublicationsCustomFieldsRequest1Dict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[CustomFieldResponse, Put2ErrorBody]:
        """Update a custom field on a publication.

        Args:
            publication_id: The prefixed ID of the publication object
            id_: The ID of the Custom Fields object
            authorization: Bearer authentication
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/publications/{publicationId}/custom_fields/{id}"),
            path_params=[param[str]("publicationId", publication_id), param[str]("id", id_)],
            headers=[param[str]("Authorization", authorization), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PublicationsCustomFieldsRequest1 | PublicationsCustomFieldsRequest1Dict | None](body),
            decoder=async_json_decoder[CustomFieldResponse],
            error_mapper=put2_error_mapper,
            request_options=request_options,
        )

    async def show7(
        self,
        publication_id: str,
        id_: str,
        authorization: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[CustomFieldResponse, Show7ErrorBody]:
        """View a specific custom field on a publication.

        Args:
            publication_id: The prefixed ID of the publication object
            id_: The ID of the Custom Fields object
            authorization: Bearer authentication
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/publications/{publicationId}/custom_fields/{id}"),
            path_params=[param[str]("publicationId", publication_id), param[str]("id", id_)],
            headers=[param[str]("Authorization", authorization)],
            decoder=async_json_decoder[CustomFieldResponse],
            error_mapper=show7_error_mapper,
            request_options=request_options,
        )
