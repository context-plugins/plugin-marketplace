from __future__ import annotations

from uuid import UUID, uuid4

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    ApiResult,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    RawClient,
    RequestOptionsOrDict,
    SecuredRawResponse,
    async_json_decoder,
    json_body,
    json_decoder,
    param,
    unwrap,
)
from ..errors.create_destination_error import CreateDestinationErrorBody, create_destination_error_mapper
from ..errors.get_destination_error import GetDestinationErrorBody, get_destination_error_mapper
from ..errors.list_destination_error import ListDestinationErrorBody, list_destination_error_mapper
from ..errors.update_destination_error import UpdateDestinationErrorBody, update_destination_error_mapper
from ..models.destination import Destination
from ..models.destination_create import DestinationCreate, DestinationCreateDict
from ..models.destination_update import DestinationUpdate, DestinationUpdateDict
from ..models.destinations_response import DestinationsResponse
from ..models.enums.order_by_hightouch_destinations_api import (
    OrderByHightouchDestinationsApi,
    OrderByHightouchDestinationsApiOrStr,
)
from ..models.unions.destinations_response1 import DestinationsResponse1
from ..server.server import Server


class Destinations:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = DestinationsWithRawResponse(client, server, auth)

    def create_destination(
        self, body: DestinationCreate | DestinationCreateDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> DestinationsResponse1:
        """Create a new destination

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Ok

        Raises:
            ApiError: Unauthorized Conflict Validation Failed Something went wrong ``error`` is ``ValidateErrorJson |
                InternalServerErrorOrStr | RawError``."""
        return unwrap(self._with_raw_response.create_destination(body, request_options=request_options))

    def get_destination(
        self, destination_id: float, *, request_options: RequestOptionsOrDict | None = None
    ) -> Destination:
        """Retrieve a destination based on its Hightouch ID

        Args:
            destination_id: The destination's ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Ok

        Raises:
            ApiError: Unauthorized Not found ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.get_destination(destination_id, request_options=request_options))

    def list_destination(
        self,
        *,
        name: str | None = None,
        slug: str | None = None,
        offset: float | None = 0.0,
        limit: float | None = 100.0,
        order_by: OrderByHightouchDestinationsApiOrStr | None = OrderByHightouchDestinationsApi.ID,
        request_options: RequestOptionsOrDict | None = None,
    ) -> DestinationsResponse:
        """List the destinations in the user's workspace

        Args:
            name: Filter based on the destination's name
            slug: Filter based on destination's slug
            offset: set the offset on results (for pagination)
            limit: limit the number of objects returned (default is 100)
            order_by: Order the returned destinations
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Ok

        Raises:
            ApiError: Bad request Unauthorized Validation Failed ``error`` is ``ValidateErrorJson | RawError``."""
        return unwrap(
            self._with_raw_response.list_destination(
                name=name, slug=slug, offset=offset, limit=limit, order_by=order_by, request_options=request_options
            ),
        )

    def update_destination(
        self,
        destination_id: float,
        body: DestinationUpdate | DestinationUpdateDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> DestinationsResponse1:
        """Update an existing destination

        Patch a destination based on its Hightouch ID

        Args:
            destination_id: The destination's ID
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Ok

        Raises:
            ApiError: Unauthorized Not found Validation Failed Something went wrong ``error`` is ``ValidateErrorJson |
                InternalServerErrorOrStr | RawError``."""
        return unwrap(self._with_raw_response.update_destination(destination_id, body, request_options=request_options))

    @property
    def with_raw_response(self) -> DestinationsWithRawResponse:
        return self._with_raw_response


class AsyncDestinations:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncDestinationsWithRawResponse(client, server, auth)

    async def create_destination(
        self,
        body: DestinationCreate | DestinationCreateDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> DestinationsResponse1:
        """Create a new destination

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Ok

        Raises:
            ApiError: Unauthorized Conflict Validation Failed Something went wrong ``error`` is ``ValidateErrorJson |
                InternalServerErrorOrStr | RawError``."""
        return unwrap(await self._with_raw_response.create_destination(body, request_options=request_options))

    async def get_destination(
        self, destination_id: float, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> Destination:
        """Retrieve a destination based on its Hightouch ID

        Args:
            destination_id: The destination's ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Ok

        Raises:
            ApiError: Unauthorized Not found ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.get_destination(destination_id, request_options=request_options))

    async def list_destination(
        self,
        *,
        name: str | None = None,
        slug: str | None = None,
        offset: float | None = 0.0,
        limit: float | None = 100.0,
        order_by: OrderByHightouchDestinationsApiOrStr | None = OrderByHightouchDestinationsApi.ID,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> DestinationsResponse:
        """List the destinations in the user's workspace

        Args:
            name: Filter based on the destination's name
            slug: Filter based on destination's slug
            offset: set the offset on results (for pagination)
            limit: limit the number of objects returned (default is 100)
            order_by: Order the returned destinations
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Ok

        Raises:
            ApiError: Bad request Unauthorized Validation Failed ``error`` is ``ValidateErrorJson | RawError``."""
        return unwrap(
            await self._with_raw_response.list_destination(
                name=name, slug=slug, offset=offset, limit=limit, order_by=order_by, request_options=request_options
            ),
        )

    async def update_destination(
        self,
        destination_id: float,
        body: DestinationUpdate | DestinationUpdateDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> DestinationsResponse1:
        """Update an existing destination

        Patch a destination based on its Hightouch ID

        Args:
            destination_id: The destination's ID
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Ok

        Raises:
            ApiError: Unauthorized Not found Validation Failed Something went wrong ``error`` is ``ValidateErrorJson |
                InternalServerErrorOrStr | RawError``."""
        return unwrap(
            await self._with_raw_response.update_destination(destination_id, body, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> AsyncDestinationsWithRawResponse:
        return self._with_raw_response


class DestinationsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def create_destination(
        self, body: DestinationCreate | DestinationCreateDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[DestinationsResponse1, CreateDestinationErrorBody]:
        """Create a new destination

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/destinations"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[DestinationCreate | DestinationCreateDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[DestinationsResponse1],
            error_mapper=create_destination_error_mapper,
            request_options=request_options,
        )

    def get_destination(
        self, destination_id: float, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Destination, GetDestinationErrorBody]:
        """Retrieve a destination based on its Hightouch ID

        Args:
            destination_id: The destination's ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/destinations/{destinationId}"),
            path_params=[param[float]("destinationId", destination_id)],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[Destination],
            error_mapper=get_destination_error_mapper,
            request_options=request_options,
        )

    def list_destination(
        self,
        *,
        name: str | None = None,
        slug: str | None = None,
        offset: float | None = 0.0,
        limit: float | None = 100.0,
        order_by: OrderByHightouchDestinationsApiOrStr | None = OrderByHightouchDestinationsApi.ID,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[DestinationsResponse, ListDestinationErrorBody]:
        """List the destinations in the user's workspace

        Args:
            name: Filter based on the destination's name
            slug: Filter based on destination's slug
            offset: set the offset on results (for pagination)
            limit: limit the number of objects returned (default is 100)
            order_by: Order the returned destinations
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/destinations"),
            query_params=[
                param[str | None]("name", name),
                param[str | None]("slug", slug),
                param[float | None]("offset", offset),
                param[float | None]("limit", limit),
                param[OrderByHightouchDestinationsApiOrStr | None]("orderBy", order_by),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[DestinationsResponse],
            error_mapper=list_destination_error_mapper,
            request_options=request_options,
        )

    def update_destination(
        self,
        destination_id: float,
        body: DestinationUpdate | DestinationUpdateDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[DestinationsResponse1, UpdateDestinationErrorBody]:
        """Update an existing destination

        Patch a destination based on its Hightouch ID

        Args:
            destination_id: The destination's ID
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/destinations/{destinationId}"),
            path_params=[param[float]("destinationId", destination_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[DestinationUpdate | DestinationUpdateDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[DestinationsResponse1],
            error_mapper=update_destination_error_mapper,
            request_options=request_options,
        )


class AsyncDestinationsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def create_destination(
        self,
        body: DestinationCreate | DestinationCreateDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[DestinationsResponse1, CreateDestinationErrorBody]:
        """Create a new destination

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/destinations"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[DestinationCreate | DestinationCreateDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[DestinationsResponse1],
            error_mapper=create_destination_error_mapper,
            request_options=request_options,
        )

    async def get_destination(
        self, destination_id: float, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Destination, GetDestinationErrorBody]:
        """Retrieve a destination based on its Hightouch ID

        Args:
            destination_id: The destination's ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/destinations/{destinationId}"),
            path_params=[param[float]("destinationId", destination_id)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[Destination],
            error_mapper=get_destination_error_mapper,
            request_options=request_options,
        )

    async def list_destination(
        self,
        *,
        name: str | None = None,
        slug: str | None = None,
        offset: float | None = 0.0,
        limit: float | None = 100.0,
        order_by: OrderByHightouchDestinationsApiOrStr | None = OrderByHightouchDestinationsApi.ID,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[DestinationsResponse, ListDestinationErrorBody]:
        """List the destinations in the user's workspace

        Args:
            name: Filter based on the destination's name
            slug: Filter based on destination's slug
            offset: set the offset on results (for pagination)
            limit: limit the number of objects returned (default is 100)
            order_by: Order the returned destinations
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/destinations"),
            query_params=[
                param[str | None]("name", name),
                param[str | None]("slug", slug),
                param[float | None]("offset", offset),
                param[float | None]("limit", limit),
                param[OrderByHightouchDestinationsApiOrStr | None]("orderBy", order_by),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[DestinationsResponse],
            error_mapper=list_destination_error_mapper,
            request_options=request_options,
        )

    async def update_destination(
        self,
        destination_id: float,
        body: DestinationUpdate | DestinationUpdateDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[DestinationsResponse1, UpdateDestinationErrorBody]:
        """Update an existing destination

        Patch a destination based on its Hightouch ID

        Args:
            destination_id: The destination's ID
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/destinations/{destinationId}"),
            path_params=[param[float]("destinationId", destination_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[DestinationUpdate | DestinationUpdateDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[DestinationsResponse1],
            error_mapper=update_destination_error_mapper,
            request_options=request_options,
        )
