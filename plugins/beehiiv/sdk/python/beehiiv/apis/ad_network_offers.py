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
from ..errors.advertisements_error import AdvertisementsErrorBody, advertisements_error_mapper
from ..errors.create_error import CreateErrorBody, create_error_mapper
from ..errors.index_error import IndexErrorBody, index_error_mapper
from ..models.ad_offer_advertisements_get_response import AdOfferAdvertisementsGetResponse
from ..models.ad_offer_create_response import AdOfferCreateResponse
from ..models.ad_offers_get_response import AdOffersGetResponse
from ..models.publications_ad_network_offers_request import (
    PublicationsAdNetworkOffersRequest,
    PublicationsAdNetworkOffersRequestDict,
)
from ..server.server import Server


class AdNetworkOffers:
    def __init__(self, client: RawClient, server: Server) -> None:
        self._with_raw_response = AdNetworkOffersWithRawResponse(client, server)

    def advertisements(
        self,
        publication_id: str,
        offer_id: str,
        authorization: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> AdOfferAdvertisementsGetResponse:
        """This feature is currently in beta and the API is subject to change.

        Retrieve the active text advertisement creatives available for an ad offer.

        Args:
            publication_id: The prefixed ID of the publication object
            offer_id: The ID of the ad offer.
            authorization: Bearer authentication
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Bad Request Unauthorized. The API key or OAuth access token is missing, invalid, or expired.
                Forbidden Resource Not Found Unprocessable Entity Rate Limit Exceeded Internal Server Error ``error`` is
                ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.advertisements(
                publication_id, offer_id, authorization, request_options=request_options
            ),
        )

    def create(
        self,
        publication_id: str,
        authorization: str,
        *,
        body: PublicationsAdNetworkOffersRequest | PublicationsAdNetworkOffersRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> AdOfferCreateResponse:
        """This feature is currently in beta and the API is subject to change.

        Draft and accept an ad offer, then insert the resulting advertisement opportunity into a post.

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
                Forbidden Resource Not Found Unprocessable Entity Rate Limit Exceeded Internal Server Error ``error`` is
                ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.create(publication_id, authorization, body=body, request_options=request_options)
        )

    def index(
        self,
        publication_id: str,
        authorization: str,
        *,
        requested_from: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> AdOffersGetResponse:
        """This feature is currently in beta and the API is subject to change.

        Retrieve a list of ad offers available for the publication.

        Args:
            publication_id: The prefixed ID of the publication object
            authorization: Bearer authentication
            requested_from: A source identifier for where the offers request originated.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Bad Request Unauthorized. The API key or OAuth access token is missing, invalid, or expired.
                Forbidden Resource Not Found Rate Limit Exceeded Internal Server Error ``error`` is ``Error |
                RawError``."""
        return unwrap(
            self._with_raw_response.index(
                publication_id, authorization, requested_from=requested_from, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AdNetworkOffersWithRawResponse:
        return self._with_raw_response


class AsyncAdNetworkOffers:
    def __init__(self, client: AsyncRawClient, server: Server) -> None:
        self._with_raw_response = AsyncAdNetworkOffersWithRawResponse(client, server)

    async def advertisements(
        self,
        publication_id: str,
        offer_id: str,
        authorization: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> AdOfferAdvertisementsGetResponse:
        """This feature is currently in beta and the API is subject to change.

        Retrieve the active text advertisement creatives available for an ad offer.

        Args:
            publication_id: The prefixed ID of the publication object
            offer_id: The ID of the ad offer.
            authorization: Bearer authentication
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Bad Request Unauthorized. The API key or OAuth access token is missing, invalid, or expired.
                Forbidden Resource Not Found Unprocessable Entity Rate Limit Exceeded Internal Server Error ``error`` is
                ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.advertisements(
                publication_id, offer_id, authorization, request_options=request_options
            ),
        )

    async def create(
        self,
        publication_id: str,
        authorization: str,
        *,
        body: PublicationsAdNetworkOffersRequest | PublicationsAdNetworkOffersRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> AdOfferCreateResponse:
        """This feature is currently in beta and the API is subject to change.

        Draft and accept an ad offer, then insert the resulting advertisement opportunity into a post.

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
                Forbidden Resource Not Found Unprocessable Entity Rate Limit Exceeded Internal Server Error ``error`` is
                ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.create(
                publication_id, authorization, body=body, request_options=request_options
            ),
        )

    async def index(
        self,
        publication_id: str,
        authorization: str,
        *,
        requested_from: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> AdOffersGetResponse:
        """This feature is currently in beta and the API is subject to change.

        Retrieve a list of ad offers available for the publication.

        Args:
            publication_id: The prefixed ID of the publication object
            authorization: Bearer authentication
            requested_from: A source identifier for where the offers request originated.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Bad Request Unauthorized. The API key or OAuth access token is missing, invalid, or expired.
                Forbidden Resource Not Found Rate Limit Exceeded Internal Server Error ``error`` is ``Error |
                RawError``."""
        return unwrap(
            await self._with_raw_response.index(
                publication_id, authorization, requested_from=requested_from, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncAdNetworkOffersWithRawResponse:
        return self._with_raw_response


class AdNetworkOffersWithRawResponse(BaseRawResponse[RawClient, Server]):
    def advertisements(
        self,
        publication_id: str,
        offer_id: str,
        authorization: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[AdOfferAdvertisementsGetResponse, AdvertisementsErrorBody]:
        """This feature is currently in beta and the API is subject to change.

        Retrieve the active text advertisement creatives available for an ad offer.

        Args:
            publication_id: The prefixed ID of the publication object
            offer_id: The ID of the ad offer.
            authorization: Bearer authentication
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default(
                "/publications/{publicationId}/ad_network/offers/{offerId}/advertisements"
            ),
            path_params=[param[str]("publicationId", publication_id), param[str]("offerId", offer_id)],
            headers=[param[str]("Authorization", authorization)],
            decoder=json_decoder[AdOfferAdvertisementsGetResponse],
            error_mapper=advertisements_error_mapper,
            request_options=request_options,
        )

    def create(
        self,
        publication_id: str,
        authorization: str,
        *,
        body: PublicationsAdNetworkOffersRequest | PublicationsAdNetworkOffersRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[AdOfferCreateResponse, CreateErrorBody]:
        """This feature is currently in beta and the API is subject to change.

        Draft and accept an ad offer, then insert the resulting advertisement opportunity into a post.

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
            url_template=self._server.default("/publications/{publicationId}/ad_network/offers"),
            path_params=[param[str]("publicationId", publication_id)],
            headers=[param[str]("Authorization", authorization), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PublicationsAdNetworkOffersRequest | PublicationsAdNetworkOffersRequestDict | None](body),
            decoder=json_decoder[AdOfferCreateResponse],
            error_mapper=create_error_mapper,
            request_options=request_options,
        )

    def index(
        self,
        publication_id: str,
        authorization: str,
        *,
        requested_from: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[AdOffersGetResponse, IndexErrorBody]:
        """This feature is currently in beta and the API is subject to change.

        Retrieve a list of ad offers available for the publication.

        Args:
            publication_id: The prefixed ID of the publication object
            authorization: Bearer authentication
            requested_from: A source identifier for where the offers request originated.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/publications/{publicationId}/ad_network/offers"),
            path_params=[param[str]("publicationId", publication_id)],
            query_params=[param[str | None]("requested_from", requested_from)],
            headers=[param[str]("Authorization", authorization)],
            decoder=json_decoder[AdOffersGetResponse],
            error_mapper=index_error_mapper,
            request_options=request_options,
        )


class AsyncAdNetworkOffersWithRawResponse(BaseRawResponse[AsyncRawClient, Server]):
    async def advertisements(
        self,
        publication_id: str,
        offer_id: str,
        authorization: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[AdOfferAdvertisementsGetResponse, AdvertisementsErrorBody]:
        """This feature is currently in beta and the API is subject to change.

        Retrieve the active text advertisement creatives available for an ad offer.

        Args:
            publication_id: The prefixed ID of the publication object
            offer_id: The ID of the ad offer.
            authorization: Bearer authentication
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default(
                "/publications/{publicationId}/ad_network/offers/{offerId}/advertisements"
            ),
            path_params=[param[str]("publicationId", publication_id), param[str]("offerId", offer_id)],
            headers=[param[str]("Authorization", authorization)],
            decoder=async_json_decoder[AdOfferAdvertisementsGetResponse],
            error_mapper=advertisements_error_mapper,
            request_options=request_options,
        )

    async def create(
        self,
        publication_id: str,
        authorization: str,
        *,
        body: PublicationsAdNetworkOffersRequest | PublicationsAdNetworkOffersRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[AdOfferCreateResponse, CreateErrorBody]:
        """This feature is currently in beta and the API is subject to change.

        Draft and accept an ad offer, then insert the resulting advertisement opportunity into a post.

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
            url_template=self._server.default("/publications/{publicationId}/ad_network/offers"),
            path_params=[param[str]("publicationId", publication_id)],
            headers=[param[str]("Authorization", authorization), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PublicationsAdNetworkOffersRequest | PublicationsAdNetworkOffersRequestDict | None](body),
            decoder=async_json_decoder[AdOfferCreateResponse],
            error_mapper=create_error_mapper,
            request_options=request_options,
        )

    async def index(
        self,
        publication_id: str,
        authorization: str,
        *,
        requested_from: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[AdOffersGetResponse, IndexErrorBody]:
        """This feature is currently in beta and the API is subject to change.

        Retrieve a list of ad offers available for the publication.

        Args:
            publication_id: The prefixed ID of the publication object
            authorization: Bearer authentication
            requested_from: A source identifier for where the offers request originated.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/publications/{publicationId}/ad_network/offers"),
            path_params=[param[str]("publicationId", publication_id)],
            query_params=[param[str | None]("requested_from", requested_from)],
            headers=[param[str]("Authorization", authorization)],
            decoder=async_json_decoder[AdOffersGetResponse],
            error_mapper=index_error_mapper,
            request_options=request_options,
        )
