from __future__ import annotations

from ..core import (
    ApiResult,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    BaseRawResponse,
    RawClient,
    RequestOptionsOrDict,
    async_json_decoder,
    json_decoder,
    param,
    unwrap,
)
from ..errors.index3_error import Index3ErrorBody, index3_error_mapper
from ..models.advertisement_opportunities_get_response import AdvertisementOpportunitiesGetResponse
from ..server.server import Server


class AdvertisementOpportunities:
    def __init__(self, client: RawClient, server: Server) -> None:
        self._with_raw_response = AdvertisementOpportunitiesWithRawResponse(client, server)

    def index3(
        self, publication_id: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> AdvertisementOpportunitiesGetResponse:
        """Retrieve a list of accepted advertisement opportunities for the publication.

        Args:
            publication_id: The prefixed ID of the publication object
            authorization: Bearer authentication
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Bad Request Unauthorized. The API key or OAuth access token is missing, invalid, or expired.
                Forbidden Resource Not Found Rate Limit Exceeded Internal Server Error ``error`` is ``Error |
                RawError``."""
        return unwrap(self._with_raw_response.index3(publication_id, authorization, request_options=request_options))

    @property
    def with_raw_response(self) -> AdvertisementOpportunitiesWithRawResponse:
        return self._with_raw_response


class AsyncAdvertisementOpportunities:
    def __init__(self, client: AsyncRawClient, server: Server) -> None:
        self._with_raw_response = AsyncAdvertisementOpportunitiesWithRawResponse(client, server)

    async def index3(
        self, publication_id: str, authorization: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> AdvertisementOpportunitiesGetResponse:
        """Retrieve a list of accepted advertisement opportunities for the publication.

        Args:
            publication_id: The prefixed ID of the publication object
            authorization: Bearer authentication
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Bad Request Unauthorized. The API key or OAuth access token is missing, invalid, or expired.
                Forbidden Resource Not Found Rate Limit Exceeded Internal Server Error ``error`` is ``Error |
                RawError``."""
        return unwrap(
            await self._with_raw_response.index3(publication_id, authorization, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> AsyncAdvertisementOpportunitiesWithRawResponse:
        return self._with_raw_response


class AdvertisementOpportunitiesWithRawResponse(BaseRawResponse[RawClient, Server]):
    def index3(
        self, publication_id: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[AdvertisementOpportunitiesGetResponse, Index3ErrorBody]:
        """Retrieve a list of accepted advertisement opportunities for the publication.

        Args:
            publication_id: The prefixed ID of the publication object
            authorization: Bearer authentication
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/publications/{publicationId}/advertisement_opportunities"),
            path_params=[param[str]("publicationId", publication_id)],
            headers=[param[str]("Authorization", authorization)],
            decoder=json_decoder[AdvertisementOpportunitiesGetResponse],
            error_mapper=index3_error_mapper,
            request_options=request_options,
        )


class AsyncAdvertisementOpportunitiesWithRawResponse(BaseRawResponse[AsyncRawClient, Server]):
    async def index3(
        self, publication_id: str, authorization: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[AdvertisementOpportunitiesGetResponse, Index3ErrorBody]:
        """Retrieve a list of accepted advertisement opportunities for the publication.

        Args:
            publication_id: The prefixed ID of the publication object
            authorization: Bearer authentication
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/publications/{publicationId}/advertisement_opportunities"),
            path_params=[param[str]("publicationId", publication_id)],
            headers=[param[str]("Authorization", authorization)],
            decoder=async_json_decoder[AdvertisementOpportunitiesGetResponse],
            error_mapper=index3_error_mapper,
            request_options=request_options,
        )
