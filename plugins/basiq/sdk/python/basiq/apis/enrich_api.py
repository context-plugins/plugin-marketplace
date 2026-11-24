from __future__ import annotations

from uuid import UUID

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    ApiResult,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    RawClient,
    RawError,
    RequestOptionsOrDict,
    SecuredRawResponse,
    async_json_decoder,
    json_decoder,
    param,
    raw_error_response,
    unwrap,
)
from ..errors.enrich_error import EnrichErrorBody, enrich_error_mapper
from ..errors.get_merchant_by_id_error import GetMerchantByIdErrorBody, get_merchant_by_id_error_mapper
from ..models.enrich_response import EnrichResponse
from ..models.merchants_response import MerchantsResponse
from ..models.single_merchant_response import SingleMerchantResponse
from ..server.server import Server


class EnrichApi:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = EnrichApiWithRawResponse(client, server, auth)

    def enrich(
        self,
        q: str,
        institution: str,
        country: str,
        *,
        mcc: str | None = None,
        account_type: str | None = None,
        amount: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> EnrichResponse:
        """The Enrich resource enables you to retrieve details by passing in a search query containing a bank
        transaction description. The service enriches transaction data with multiple attributes, returning a transaction
        classification and three metadata components. The transaction classification will first determine if the
        transaction is of type payment, transfer, cash-withdrawal, bank-fee etc. The engine then derives merchant
        information, purchase location and prescribes an industry standard categorisation for each payment transaction.

        Args:
            q: This is the search string that is used to lookup the entity (merchant) information.
                ````**q=garfish%20MANLY%20NS**&country=AU&institution=AU06703````
            institution: Identifies the institution from where the transaction was derived. This must be a Basiq
                recognisable institution ID.
                ````enrich?METRO%20PETROLEUM%20FR%20FORE&country=AU&accountType=transaction&amount=-12.95&**institution=AU04301**````
            country: Specifies the country the search should be narrowed down to. Passing in a country value will limit
                the search to the specified country. The country must be in ISO 3166 Alpha-2 format
                ````q=garfish%20MANLY%20NS&**country=AU**&institution=AU06703````
            mcc: Merchant classification code as defined by Visa and Mastercard
                ````q=garfish%20MANLY%20NS&country=AU&institution=AU06703&**mcc=3299**````
            account_type: The Account type from which the transaction was derived.
                ````METRO%20PETROLEUM%20FR%20FORE&country=AU&accountType=transaction&institution=AU04301```` **Valid
                values:** - ``transaction`` - ``credit-card`` - ``savings`` - ``mortgage`` - ``loan`` - ``foreign``
            amount: The dollar/cent amount relevant to the transaction.
                ````q=garfish%20MANLY%20NS&country=AU&institution=AU06703&**amount=-12.95**````
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The enrich endpoint will always return a 200 response to the user, along with a set of results for each of
            the datasets subscribed to: category, entity and location. If no results are found for the search query then
            an empty result set is returned. If parameter inputs are invalid an error is returned.

        Raises:
            ApiError: Returns error that server cannot or will not process the request due to something that is
                perceived to be a client error. Error that access is forbidden and tied to the application logic, such
                as insufficient rights to a resource. Returns error response code indicates that the server encountered
                an unexpected condition that prevented it from fulfilling the request. ``error`` is ``Enrich400Error1 |
                Enrich403Error1 | Enrich500Error1 | RawError``."""
        return unwrap(
            self._with_raw_response.enrich(
                q,
                institution,
                country,
                mcc=mcc,
                account_type=account_type,
                amount=amount,
                request_options=request_options,
            ),
        )

    def get_merchant_by_id(
        self, merchant_id: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> SingleMerchantResponse:
        """Retrieves a single merchant's details using its unique ID.

        Args:
            merchant_id: The unique identifier of the merchant.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response with a single merchant's detailed data.

        Raises:
            ApiError: Merchant not found. ``error`` is ``MerchantNotFoundError | RawError``."""
        return unwrap(self._with_raw_response.get_merchant_by_id(merchant_id, request_options=request_options))

    def merchant_search(
        self,
        *,
        abn: str | None = None,
        merchant_name: str | None = None,
        suburb: str | None = None,
        entity_type: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> MerchantsResponse:
        """Retrieves merchant details. At least one of ``abn`` or ``merchantName`` is required for a successful search.
        Optional filters for suburb and entity type can also be applied.

        Args:
            abn: The Australian Business Number (ABN) of the merchant. Required if ``merchantName`` is not provided.
            merchant_name: The name of the merchant. Required if ``abn`` is not provided.
            suburb: The suburb of the merchant location to filter by.
            entity_type: The type of the merchant entity to filter by.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response with merchant data.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.merchant_search(
                abn=abn,
                merchant_name=merchant_name,
                suburb=suburb,
                entity_type=entity_type,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> EnrichApiWithRawResponse:
        return self._with_raw_response


class AsyncEnrichApi:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncEnrichApiWithRawResponse(client, server, auth)

    async def enrich(
        self,
        q: str,
        institution: str,
        country: str,
        *,
        mcc: str | None = None,
        account_type: str | None = None,
        amount: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> EnrichResponse:
        """The Enrich resource enables you to retrieve details by passing in a search query containing a bank
        transaction description. The service enriches transaction data with multiple attributes, returning a transaction
        classification and three metadata components. The transaction classification will first determine if the
        transaction is of type payment, transfer, cash-withdrawal, bank-fee etc. The engine then derives merchant
        information, purchase location and prescribes an industry standard categorisation for each payment transaction.

        Args:
            q: This is the search string that is used to lookup the entity (merchant) information.
                ````**q=garfish%20MANLY%20NS**&country=AU&institution=AU06703````
            institution: Identifies the institution from where the transaction was derived. This must be a Basiq
                recognisable institution ID.
                ````enrich?METRO%20PETROLEUM%20FR%20FORE&country=AU&accountType=transaction&amount=-12.95&**institution=AU04301**````
            country: Specifies the country the search should be narrowed down to. Passing in a country value will limit
                the search to the specified country. The country must be in ISO 3166 Alpha-2 format
                ````q=garfish%20MANLY%20NS&**country=AU**&institution=AU06703````
            mcc: Merchant classification code as defined by Visa and Mastercard
                ````q=garfish%20MANLY%20NS&country=AU&institution=AU06703&**mcc=3299**````
            account_type: The Account type from which the transaction was derived.
                ````METRO%20PETROLEUM%20FR%20FORE&country=AU&accountType=transaction&institution=AU04301```` **Valid
                values:** - ``transaction`` - ``credit-card`` - ``savings`` - ``mortgage`` - ``loan`` - ``foreign``
            amount: The dollar/cent amount relevant to the transaction.
                ````q=garfish%20MANLY%20NS&country=AU&institution=AU06703&**amount=-12.95**````
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The enrich endpoint will always return a 200 response to the user, along with a set of results for each of
            the datasets subscribed to: category, entity and location. If no results are found for the search query then
            an empty result set is returned. If parameter inputs are invalid an error is returned.

        Raises:
            ApiError: Returns error that server cannot or will not process the request due to something that is
                perceived to be a client error. Error that access is forbidden and tied to the application logic, such
                as insufficient rights to a resource. Returns error response code indicates that the server encountered
                an unexpected condition that prevented it from fulfilling the request. ``error`` is ``Enrich400Error1 |
                Enrich403Error1 | Enrich500Error1 | RawError``."""
        return unwrap(
            await self._with_raw_response.enrich(
                q,
                institution,
                country,
                mcc=mcc,
                account_type=account_type,
                amount=amount,
                request_options=request_options,
            ),
        )

    async def get_merchant_by_id(
        self, merchant_id: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> SingleMerchantResponse:
        """Retrieves a single merchant's details using its unique ID.

        Args:
            merchant_id: The unique identifier of the merchant.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response with a single merchant's detailed data.

        Raises:
            ApiError: Merchant not found. ``error`` is ``MerchantNotFoundError | RawError``."""
        return unwrap(await self._with_raw_response.get_merchant_by_id(merchant_id, request_options=request_options))

    async def merchant_search(
        self,
        *,
        abn: str | None = None,
        merchant_name: str | None = None,
        suburb: str | None = None,
        entity_type: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> MerchantsResponse:
        """Retrieves merchant details. At least one of ``abn`` or ``merchantName`` is required for a successful search.
        Optional filters for suburb and entity type can also be applied.

        Args:
            abn: The Australian Business Number (ABN) of the merchant. Required if ``merchantName`` is not provided.
            merchant_name: The name of the merchant. Required if ``abn`` is not provided.
            suburb: The suburb of the merchant location to filter by.
            entity_type: The type of the merchant entity to filter by.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response with merchant data.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.merchant_search(
                abn=abn,
                merchant_name=merchant_name,
                suburb=suburb,
                entity_type=entity_type,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> AsyncEnrichApiWithRawResponse:
        return self._with_raw_response


class EnrichApiWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def enrich(
        self,
        q: str,
        institution: str,
        country: str,
        *,
        mcc: str | None = None,
        account_type: str | None = None,
        amount: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[EnrichResponse, EnrichErrorBody]:
        """The Enrich resource enables you to retrieve details by passing in a search query containing a bank
        transaction description. The service enriches transaction data with multiple attributes, returning a transaction
        classification and three metadata components. The transaction classification will first determine if the
        transaction is of type payment, transfer, cash-withdrawal, bank-fee etc. The engine then derives merchant
        information, purchase location and prescribes an industry standard categorisation for each payment transaction.

        Args:
            q: This is the search string that is used to lookup the entity (merchant) information.
                ````**q=garfish%20MANLY%20NS**&country=AU&institution=AU06703````
            institution: Identifies the institution from where the transaction was derived. This must be a Basiq
                recognisable institution ID.
                ````enrich?METRO%20PETROLEUM%20FR%20FORE&country=AU&accountType=transaction&amount=-12.95&**institution=AU04301**````
            country: Specifies the country the search should be narrowed down to. Passing in a country value will limit
                the search to the specified country. The country must be in ISO 3166 Alpha-2 format
                ````q=garfish%20MANLY%20NS&**country=AU**&institution=AU06703````
            mcc: Merchant classification code as defined by Visa and Mastercard
                ````q=garfish%20MANLY%20NS&country=AU&institution=AU06703&**mcc=3299**````
            account_type: The Account type from which the transaction was derived.
                ````METRO%20PETROLEUM%20FR%20FORE&country=AU&accountType=transaction&institution=AU04301```` **Valid
                values:** - ``transaction`` - ``credit-card`` - ``savings`` - ``mortgage`` - ``loan`` - ``foreign``
            amount: The dollar/cent amount relevant to the transaction.
                ````q=garfish%20MANLY%20NS&country=AU&institution=AU06703&**amount=-12.95**````
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/enrich"),
            query_params=[
                param[str]("q", q),
                param[str]("institution", institution),
                param[str]("country", country),
                param[str | None]("mcc", mcc),
                param[str | None]("accountType", account_type),
                param[str | None]("amount", amount),
            ],
            auth_scheme=self._auth.services_token,
            decoder=json_decoder[EnrichResponse],
            error_mapper=enrich_error_mapper,
            request_options=request_options,
        )

    def get_merchant_by_id(
        self, merchant_id: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[SingleMerchantResponse, GetMerchantByIdErrorBody]:
        """Retrieves a single merchant's details using its unique ID.

        Args:
            merchant_id: The unique identifier of the merchant.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/merchants/{merchantId}"),
            path_params=[param[UUID]("merchantId", merchant_id)],
            auth_scheme=self._auth.services_token,
            decoder=json_decoder[SingleMerchantResponse],
            error_mapper=get_merchant_by_id_error_mapper,
            request_options=request_options,
        )

    def merchant_search(
        self,
        *,
        abn: str | None = None,
        merchant_name: str | None = None,
        suburb: str | None = None,
        entity_type: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[MerchantsResponse, RawError]:
        """Retrieves merchant details. At least one of ``abn`` or ``merchantName`` is required for a successful search.
        Optional filters for suburb and entity type can also be applied.

        Args:
            abn: The Australian Business Number (ABN) of the merchant. Required if ``merchantName`` is not provided.
            merchant_name: The name of the merchant. Required if ``abn`` is not provided.
            suburb: The suburb of the merchant location to filter by.
            entity_type: The type of the merchant entity to filter by.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/merchants"),
            query_params=[
                param[str | None]("abn", abn),
                param[str | None]("merchantName", merchant_name),
                param[str | None]("suburb", suburb),
                param[str | None]("entityType", entity_type),
            ],
            auth_scheme=self._auth.services_token,
            decoder=json_decoder[MerchantsResponse],
            error_mapper=raw_error_response,
            request_options=request_options,
        )


class AsyncEnrichApiWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def enrich(
        self,
        q: str,
        institution: str,
        country: str,
        *,
        mcc: str | None = None,
        account_type: str | None = None,
        amount: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[EnrichResponse, EnrichErrorBody]:
        """The Enrich resource enables you to retrieve details by passing in a search query containing a bank
        transaction description. The service enriches transaction data with multiple attributes, returning a transaction
        classification and three metadata components. The transaction classification will first determine if the
        transaction is of type payment, transfer, cash-withdrawal, bank-fee etc. The engine then derives merchant
        information, purchase location and prescribes an industry standard categorisation for each payment transaction.

        Args:
            q: This is the search string that is used to lookup the entity (merchant) information.
                ````**q=garfish%20MANLY%20NS**&country=AU&institution=AU06703````
            institution: Identifies the institution from where the transaction was derived. This must be a Basiq
                recognisable institution ID.
                ````enrich?METRO%20PETROLEUM%20FR%20FORE&country=AU&accountType=transaction&amount=-12.95&**institution=AU04301**````
            country: Specifies the country the search should be narrowed down to. Passing in a country value will limit
                the search to the specified country. The country must be in ISO 3166 Alpha-2 format
                ````q=garfish%20MANLY%20NS&**country=AU**&institution=AU06703````
            mcc: Merchant classification code as defined by Visa and Mastercard
                ````q=garfish%20MANLY%20NS&country=AU&institution=AU06703&**mcc=3299**````
            account_type: The Account type from which the transaction was derived.
                ````METRO%20PETROLEUM%20FR%20FORE&country=AU&accountType=transaction&institution=AU04301```` **Valid
                values:** - ``transaction`` - ``credit-card`` - ``savings`` - ``mortgage`` - ``loan`` - ``foreign``
            amount: The dollar/cent amount relevant to the transaction.
                ````q=garfish%20MANLY%20NS&country=AU&institution=AU06703&**amount=-12.95**````
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/enrich"),
            query_params=[
                param[str]("q", q),
                param[str]("institution", institution),
                param[str]("country", country),
                param[str | None]("mcc", mcc),
                param[str | None]("accountType", account_type),
                param[str | None]("amount", amount),
            ],
            auth_scheme=self._auth.services_token,
            decoder=async_json_decoder[EnrichResponse],
            error_mapper=enrich_error_mapper,
            request_options=request_options,
        )

    async def get_merchant_by_id(
        self, merchant_id: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[SingleMerchantResponse, GetMerchantByIdErrorBody]:
        """Retrieves a single merchant's details using its unique ID.

        Args:
            merchant_id: The unique identifier of the merchant.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/merchants/{merchantId}"),
            path_params=[param[UUID]("merchantId", merchant_id)],
            auth_scheme=self._auth.services_token,
            decoder=async_json_decoder[SingleMerchantResponse],
            error_mapper=get_merchant_by_id_error_mapper,
            request_options=request_options,
        )

    async def merchant_search(
        self,
        *,
        abn: str | None = None,
        merchant_name: str | None = None,
        suburb: str | None = None,
        entity_type: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[MerchantsResponse, RawError]:
        """Retrieves merchant details. At least one of ``abn`` or ``merchantName`` is required for a successful search.
        Optional filters for suburb and entity type can also be applied.

        Args:
            abn: The Australian Business Number (ABN) of the merchant. Required if ``merchantName`` is not provided.
            merchant_name: The name of the merchant. Required if ``abn`` is not provided.
            suburb: The suburb of the merchant location to filter by.
            entity_type: The type of the merchant entity to filter by.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/merchants"),
            query_params=[
                param[str | None]("abn", abn),
                param[str | None]("merchantName", merchant_name),
                param[str | None]("suburb", suburb),
                param[str | None]("entityType", entity_type),
            ],
            auth_scheme=self._auth.services_token,
            decoder=async_json_decoder[MerchantsResponse],
            error_mapper=raw_error_response,
            request_options=request_options,
        )
