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
from ..errors.get_billing_statement_detail_error import (
    GetBillingStatementDetailErrorBody,
    get_billing_statement_detail_error_mapper,
)
from ..errors.get_organization_error import GetOrganizationErrorBody, get_organization_error_mapper
from ..errors.get_price_plan_error import GetPricePlanErrorBody, get_price_plan_error_mapper
from ..errors.list_billing_statements_error import ListBillingStatementsErrorBody, list_billing_statements_error_mapper
from ..errors.list_industries_error import ListIndustriesErrorBody, list_industries_error_mapper
from ..errors.update_organization_error import UpdateOrganizationErrorBody, update_organization_error_mapper
from ..models.billing_statement_detail_response_dto import BillingStatementDetailResponseDto
from ..models.list_industries_response_dto import ListIndustriesResponseDto
from ..models.list_response_dto_billing_statement_response_dto import ListResponseDtoBillingStatementResponseDto
from ..models.organization_response_dto import OrganizationResponseDto
from ..models.organization_update_request_dto import OrganizationUpdateRequestDto, OrganizationUpdateRequestDtoDict
from ..models.price_plan_response_dto import PricePlanResponseDto
from ..server.server import Server


class Organizations:
    def __init__(self, client: RawClient, server: Server) -> None:
        self._with_raw_response = OrganizationsWithRawResponse(client, server)

    def get_billing_statement_detail(
        self,
        organization_id: str,
        billing_statement_id: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> BillingStatementDetailResponseDto:
        """Get details about a billing statement for the organization. BILL generates a monthly billing invoice
        statement for all the billing activities in the organization.

        From the response, use ``downloadLink`` in a GET request to download a billing statement.

        ```
        curl '{downloadLink}' --header 'sessionId: {session_id}' --output {statement_name}
        ```

        Args:
            organization_id: Value sent with the request.
            billing_statement_id: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Get billing statement details response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.get_billing_statement_detail(
                organization_id,
                billing_statement_id,
                session_id=session_id,
                dev_key=dev_key,
                request_options=request_options,
            ),
        )

    def get_organization(
        self,
        organization_id: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> OrganizationResponseDto:
        """Get details about an existing organization. The currently signed-in user must have the ``ADMINISTRATOR`` user
        role in the BILL organization to perform this operation.

        See Organizations and Users in the Guides section for more information, sample requests, and responses.

        Args:
            organization_id: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Get organization details response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.get_organization(
                organization_id, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    def get_price_plan(
        self,
        organization_id: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> PricePlanResponseDto:
        """Get the BILL price plan details for an existing organization. The currently signed-in user must have the
        ``ADMINISTRATOR`` user role in the BILL organization to perform this operation.

        A BILL price plan for an organization provides a range of information, including monthly subscription fees and
        the terms and conditions for additional charges in the price plan.

        In the response, the ``planTerms`` object includes information about charges for price plan features based on a
        combination of charge ``tier``, ``quantity``, and ``price``. We explain plan terms with an example.
        * If ``"tier": 1``, ``"quantity": 5``, and ``"price": 10``, the first 5 users will be charged $10 each.
        * If ``"tier": 2``, ``"quantity": 10``, and ``"price": 8``, the next 10 users will be charged $8 each. At this
            level, if there is no ``tier`` information, all users after tier 1 will be charged $8 each.

        Args:
            organization_id: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Get organization price plan details response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.get_price_plan(
                organization_id, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    def list_billing_statements(
        self,
        organization_id: str,
        *,
        max_: int | None = None,
        invoice_date_from: str | None = None,
        invoice_date_to: str | None = None,
        page: str | None = None,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ListResponseDtoBillingStatementResponseDto:
        """Get a list of billing statements for the organization. BILL generates a monthly billing invoice statement for
        all the billing activities in the organization.

        In the request, set ``invoiceDateFrom`` and ``invoiceDateTo`` to get the billing invoice statements for the
        specified date range.

        You can set ``max`` and ``page`` in the request only when both ``invoiceDateFrom`` and ``invoiceDateTo`` are not
        set. By default, you get 20 results on one page of results. Set ``max`` in your request to get up to 100 results
        on one page.

        See Search operations with lists in the Guides section for filtering, sorting, and pagination examples.

        Args:
            organization_id: Value sent with the request.
            max_: Value sent with the request.
            invoice_date_from: Value sent with the request.
            invoice_date_to: Value sent with the request.
            page: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Get list of billing statements response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.list_billing_statements(
                organization_id,
                max_=max_,
                invoice_date_from=invoice_date_from,
                invoice_date_to=invoice_date_to,
                page=page,
                session_id=session_id,
                dev_key=dev_key,
                request_options=request_options,
            ),
        )

    def list_industries(
        self,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ListIndustriesResponseDto:
        """Get a list of available values for the ``industry`` field for an organization. Use this information to set
        the ``industry`` field in your ``POST /v3/partner/organizations`` or ``PATCH
        /v3/organizations/{organizationId}`` request.

        Args:
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Get list of organization industries response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.list_industries(
                session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    def update_organization(
        self,
        organization_id: str,
        body: OrganizationUpdateRequestDto | OrganizationUpdateRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> OrganizationResponseDto:
        """Update details about an existing organization. The currently signed-in user must have the ``ADMINISTRATOR``
        user role in the BILL organization to perform this operation.

        See Organizations and Users in the Guides section for more information, sample requests, and responses.

        Args:
            organization_id: Value sent with the request.
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Update an organization response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.update_organization(
                organization_id, body, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> OrganizationsWithRawResponse:
        return self._with_raw_response


class AsyncOrganizations:
    def __init__(self, client: AsyncRawClient, server: Server) -> None:
        self._with_raw_response = AsyncOrganizationsWithRawResponse(client, server)

    async def get_billing_statement_detail(
        self,
        organization_id: str,
        billing_statement_id: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> BillingStatementDetailResponseDto:
        """Get details about a billing statement for the organization. BILL generates a monthly billing invoice
        statement for all the billing activities in the organization.

        From the response, use ``downloadLink`` in a GET request to download a billing statement.

        ```
        curl '{downloadLink}' --header 'sessionId: {session_id}' --output {statement_name}
        ```

        Args:
            organization_id: Value sent with the request.
            billing_statement_id: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Get billing statement details response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.get_billing_statement_detail(
                organization_id,
                billing_statement_id,
                session_id=session_id,
                dev_key=dev_key,
                request_options=request_options,
            ),
        )

    async def get_organization(
        self,
        organization_id: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> OrganizationResponseDto:
        """Get details about an existing organization. The currently signed-in user must have the ``ADMINISTRATOR`` user
        role in the BILL organization to perform this operation.

        See Organizations and Users in the Guides section for more information, sample requests, and responses.

        Args:
            organization_id: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Get organization details response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.get_organization(
                organization_id, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    async def get_price_plan(
        self,
        organization_id: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> PricePlanResponseDto:
        """Get the BILL price plan details for an existing organization. The currently signed-in user must have the
        ``ADMINISTRATOR`` user role in the BILL organization to perform this operation.

        A BILL price plan for an organization provides a range of information, including monthly subscription fees and
        the terms and conditions for additional charges in the price plan.

        In the response, the ``planTerms`` object includes information about charges for price plan features based on a
        combination of charge ``tier``, ``quantity``, and ``price``. We explain plan terms with an example.
        * If ``"tier": 1``, ``"quantity": 5``, and ``"price": 10``, the first 5 users will be charged $10 each.
        * If ``"tier": 2``, ``"quantity": 10``, and ``"price": 8``, the next 10 users will be charged $8 each. At this
            level, if there is no ``tier`` information, all users after tier 1 will be charged $8 each.

        Args:
            organization_id: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Get organization price plan details response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.get_price_plan(
                organization_id, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    async def list_billing_statements(
        self,
        organization_id: str,
        *,
        max_: int | None = None,
        invoice_date_from: str | None = None,
        invoice_date_to: str | None = None,
        page: str | None = None,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ListResponseDtoBillingStatementResponseDto:
        """Get a list of billing statements for the organization. BILL generates a monthly billing invoice statement for
        all the billing activities in the organization.

        In the request, set ``invoiceDateFrom`` and ``invoiceDateTo`` to get the billing invoice statements for the
        specified date range.

        You can set ``max`` and ``page`` in the request only when both ``invoiceDateFrom`` and ``invoiceDateTo`` are not
        set. By default, you get 20 results on one page of results. Set ``max`` in your request to get up to 100 results
        on one page.

        See Search operations with lists in the Guides section for filtering, sorting, and pagination examples.

        Args:
            organization_id: Value sent with the request.
            max_: Value sent with the request.
            invoice_date_from: Value sent with the request.
            invoice_date_to: Value sent with the request.
            page: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Get list of billing statements response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.list_billing_statements(
                organization_id,
                max_=max_,
                invoice_date_from=invoice_date_from,
                invoice_date_to=invoice_date_to,
                page=page,
                session_id=session_id,
                dev_key=dev_key,
                request_options=request_options,
            ),
        )

    async def list_industries(
        self,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ListIndustriesResponseDto:
        """Get a list of available values for the ``industry`` field for an organization. Use this information to set
        the ``industry`` field in your ``POST /v3/partner/organizations`` or ``PATCH
        /v3/organizations/{organizationId}`` request.

        Args:
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Get list of organization industries response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.list_industries(
                session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    async def update_organization(
        self,
        organization_id: str,
        body: OrganizationUpdateRequestDto | OrganizationUpdateRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> OrganizationResponseDto:
        """Update details about an existing organization. The currently signed-in user must have the ``ADMINISTRATOR``
        user role in the BILL organization to perform this operation.

        See Organizations and Users in the Guides section for more information, sample requests, and responses.

        Args:
            organization_id: Value sent with the request.
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Update an organization response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.update_organization(
                organization_id, body, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncOrganizationsWithRawResponse:
        return self._with_raw_response


class OrganizationsWithRawResponse(BaseRawResponse[RawClient, Server]):
    def get_billing_statement_detail(
        self,
        organization_id: str,
        billing_statement_id: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[BillingStatementDetailResponseDto, GetBillingStatementDetailErrorBody]:
        """Get details about a billing statement for the organization. BILL generates a monthly billing invoice
        statement for all the billing activities in the organization.

        From the response, use ``downloadLink`` in a GET request to download a billing statement.

        ```
        curl '{downloadLink}' --header 'sessionId: {session_id}' --output {statement_name}
        ```

        Args:
            organization_id: Value sent with the request.
            billing_statement_id: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default(
                "/v3/organizations/{organizationId}/billing-statements/{billingStatementId}"
            ),
            path_params=[
                param[str]("organizationId", organization_id), param[str]("billingStatementId", billing_statement_id)
            ],
            headers=[param[str | None]("sessionId", session_id), param[str | None]("devKey", dev_key)],
            decoder=json_decoder[BillingStatementDetailResponseDto],
            error_mapper=get_billing_statement_detail_error_mapper,
            request_options=request_options,
        )

    def get_organization(
        self,
        organization_id: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[OrganizationResponseDto, GetOrganizationErrorBody]:
        """Get details about an existing organization. The currently signed-in user must have the ``ADMINISTRATOR`` user
        role in the BILL organization to perform this operation.

        See Organizations and Users in the Guides section for more information, sample requests, and responses.

        Args:
            organization_id: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3/organizations/{organizationId}"),
            path_params=[param[str]("organizationId", organization_id)],
            headers=[param[str | None]("sessionId", session_id), param[str | None]("devKey", dev_key)],
            decoder=json_decoder[OrganizationResponseDto],
            error_mapper=get_organization_error_mapper,
            request_options=request_options,
        )

    def get_price_plan(
        self,
        organization_id: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[PricePlanResponseDto, GetPricePlanErrorBody]:
        """Get the BILL price plan details for an existing organization. The currently signed-in user must have the
        ``ADMINISTRATOR`` user role in the BILL organization to perform this operation.

        A BILL price plan for an organization provides a range of information, including monthly subscription fees and
        the terms and conditions for additional charges in the price plan.

        In the response, the ``planTerms`` object includes information about charges for price plan features based on a
        combination of charge ``tier``, ``quantity``, and ``price``. We explain plan terms with an example.
        * If ``"tier": 1``, ``"quantity": 5``, and ``"price": 10``, the first 5 users will be charged $10 each.
        * If ``"tier": 2``, ``"quantity": 10``, and ``"price": 8``, the next 10 users will be charged $8 each. At this
            level, if there is no ``tier`` information, all users after tier 1 will be charged $8 each.

        Args:
            organization_id: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3/organizations/{organizationId}/price-plan"),
            path_params=[param[str]("organizationId", organization_id)],
            headers=[param[str | None]("sessionId", session_id), param[str | None]("devKey", dev_key)],
            decoder=json_decoder[PricePlanResponseDto],
            error_mapper=get_price_plan_error_mapper,
            request_options=request_options,
        )

    def list_billing_statements(
        self,
        organization_id: str,
        *,
        max_: int | None = None,
        invoice_date_from: str | None = None,
        invoice_date_to: str | None = None,
        page: str | None = None,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ListResponseDtoBillingStatementResponseDto, ListBillingStatementsErrorBody]:
        """Get a list of billing statements for the organization. BILL generates a monthly billing invoice statement for
        all the billing activities in the organization.

        In the request, set ``invoiceDateFrom`` and ``invoiceDateTo`` to get the billing invoice statements for the
        specified date range.

        You can set ``max`` and ``page`` in the request only when both ``invoiceDateFrom`` and ``invoiceDateTo`` are not
        set. By default, you get 20 results on one page of results. Set ``max`` in your request to get up to 100 results
        on one page.

        See Search operations with lists in the Guides section for filtering, sorting, and pagination examples.

        Args:
            organization_id: Value sent with the request.
            max_: Value sent with the request.
            invoice_date_from: Value sent with the request.
            invoice_date_to: Value sent with the request.
            page: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3/organizations/{organizationId}/billing-statements"),
            path_params=[param[str]("organizationId", organization_id)],
            query_params=[
                param[int | None]("max", max_),
                param[str | None]("invoiceDateFrom", invoice_date_from),
                param[str | None]("invoiceDateTo", invoice_date_to),
                param[str | None]("page", page),
            ],
            headers=[param[str | None]("sessionId", session_id), param[str | None]("devKey", dev_key)],
            decoder=json_decoder[ListResponseDtoBillingStatementResponseDto],
            error_mapper=list_billing_statements_error_mapper,
            request_options=request_options,
        )

    def list_industries(
        self,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ListIndustriesResponseDto, ListIndustriesErrorBody]:
        """Get a list of available values for the ``industry`` field for an organization. Use this information to set
        the ``industry`` field in your ``POST /v3/partner/organizations`` or ``PATCH
        /v3/organizations/{organizationId}`` request.

        Args:
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3/organizations/industries"),
            headers=[param[str | None]("sessionId", session_id), param[str | None]("devKey", dev_key)],
            decoder=json_decoder[ListIndustriesResponseDto],
            error_mapper=list_industries_error_mapper,
            request_options=request_options,
        )

    def update_organization(
        self,
        organization_id: str,
        body: OrganizationUpdateRequestDto | OrganizationUpdateRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[OrganizationResponseDto, UpdateOrganizationErrorBody]:
        """Update details about an existing organization. The currently signed-in user must have the ``ADMINISTRATOR``
        user role in the BILL organization to perform this operation.

        See Organizations and Users in the Guides section for more information, sample requests, and responses.

        Args:
            organization_id: Value sent with the request.
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/v3/organizations/{organizationId}"),
            path_params=[param[str]("organizationId", organization_id)],
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            body=json_body[OrganizationUpdateRequestDto | OrganizationUpdateRequestDtoDict](body),
            decoder=json_decoder[OrganizationResponseDto],
            error_mapper=update_organization_error_mapper,
            request_options=request_options,
        )


class AsyncOrganizationsWithRawResponse(BaseRawResponse[AsyncRawClient, Server]):
    async def get_billing_statement_detail(
        self,
        organization_id: str,
        billing_statement_id: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[BillingStatementDetailResponseDto, GetBillingStatementDetailErrorBody]:
        """Get details about a billing statement for the organization. BILL generates a monthly billing invoice
        statement for all the billing activities in the organization.

        From the response, use ``downloadLink`` in a GET request to download a billing statement.

        ```
        curl '{downloadLink}' --header 'sessionId: {session_id}' --output {statement_name}
        ```

        Args:
            organization_id: Value sent with the request.
            billing_statement_id: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default(
                "/v3/organizations/{organizationId}/billing-statements/{billingStatementId}"
            ),
            path_params=[
                param[str]("organizationId", organization_id), param[str]("billingStatementId", billing_statement_id)
            ],
            headers=[param[str | None]("sessionId", session_id), param[str | None]("devKey", dev_key)],
            decoder=async_json_decoder[BillingStatementDetailResponseDto],
            error_mapper=get_billing_statement_detail_error_mapper,
            request_options=request_options,
        )

    async def get_organization(
        self,
        organization_id: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[OrganizationResponseDto, GetOrganizationErrorBody]:
        """Get details about an existing organization. The currently signed-in user must have the ``ADMINISTRATOR`` user
        role in the BILL organization to perform this operation.

        See Organizations and Users in the Guides section for more information, sample requests, and responses.

        Args:
            organization_id: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3/organizations/{organizationId}"),
            path_params=[param[str]("organizationId", organization_id)],
            headers=[param[str | None]("sessionId", session_id), param[str | None]("devKey", dev_key)],
            decoder=async_json_decoder[OrganizationResponseDto],
            error_mapper=get_organization_error_mapper,
            request_options=request_options,
        )

    async def get_price_plan(
        self,
        organization_id: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[PricePlanResponseDto, GetPricePlanErrorBody]:
        """Get the BILL price plan details for an existing organization. The currently signed-in user must have the
        ``ADMINISTRATOR`` user role in the BILL organization to perform this operation.

        A BILL price plan for an organization provides a range of information, including monthly subscription fees and
        the terms and conditions for additional charges in the price plan.

        In the response, the ``planTerms`` object includes information about charges for price plan features based on a
        combination of charge ``tier``, ``quantity``, and ``price``. We explain plan terms with an example.
        * If ``"tier": 1``, ``"quantity": 5``, and ``"price": 10``, the first 5 users will be charged $10 each.
        * If ``"tier": 2``, ``"quantity": 10``, and ``"price": 8``, the next 10 users will be charged $8 each. At this
            level, if there is no ``tier`` information, all users after tier 1 will be charged $8 each.

        Args:
            organization_id: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3/organizations/{organizationId}/price-plan"),
            path_params=[param[str]("organizationId", organization_id)],
            headers=[param[str | None]("sessionId", session_id), param[str | None]("devKey", dev_key)],
            decoder=async_json_decoder[PricePlanResponseDto],
            error_mapper=get_price_plan_error_mapper,
            request_options=request_options,
        )

    async def list_billing_statements(
        self,
        organization_id: str,
        *,
        max_: int | None = None,
        invoice_date_from: str | None = None,
        invoice_date_to: str | None = None,
        page: str | None = None,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ListResponseDtoBillingStatementResponseDto, ListBillingStatementsErrorBody]:
        """Get a list of billing statements for the organization. BILL generates a monthly billing invoice statement for
        all the billing activities in the organization.

        In the request, set ``invoiceDateFrom`` and ``invoiceDateTo`` to get the billing invoice statements for the
        specified date range.

        You can set ``max`` and ``page`` in the request only when both ``invoiceDateFrom`` and ``invoiceDateTo`` are not
        set. By default, you get 20 results on one page of results. Set ``max`` in your request to get up to 100 results
        on one page.

        See Search operations with lists in the Guides section for filtering, sorting, and pagination examples.

        Args:
            organization_id: Value sent with the request.
            max_: Value sent with the request.
            invoice_date_from: Value sent with the request.
            invoice_date_to: Value sent with the request.
            page: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3/organizations/{organizationId}/billing-statements"),
            path_params=[param[str]("organizationId", organization_id)],
            query_params=[
                param[int | None]("max", max_),
                param[str | None]("invoiceDateFrom", invoice_date_from),
                param[str | None]("invoiceDateTo", invoice_date_to),
                param[str | None]("page", page),
            ],
            headers=[param[str | None]("sessionId", session_id), param[str | None]("devKey", dev_key)],
            decoder=async_json_decoder[ListResponseDtoBillingStatementResponseDto],
            error_mapper=list_billing_statements_error_mapper,
            request_options=request_options,
        )

    async def list_industries(
        self,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ListIndustriesResponseDto, ListIndustriesErrorBody]:
        """Get a list of available values for the ``industry`` field for an organization. Use this information to set
        the ``industry`` field in your ``POST /v3/partner/organizations`` or ``PATCH
        /v3/organizations/{organizationId}`` request.

        Args:
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3/organizations/industries"),
            headers=[param[str | None]("sessionId", session_id), param[str | None]("devKey", dev_key)],
            decoder=async_json_decoder[ListIndustriesResponseDto],
            error_mapper=list_industries_error_mapper,
            request_options=request_options,
        )

    async def update_organization(
        self,
        organization_id: str,
        body: OrganizationUpdateRequestDto | OrganizationUpdateRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[OrganizationResponseDto, UpdateOrganizationErrorBody]:
        """Update details about an existing organization. The currently signed-in user must have the ``ADMINISTRATOR``
        user role in the BILL organization to perform this operation.

        See Organizations and Users in the Guides section for more information, sample requests, and responses.

        Args:
            organization_id: Value sent with the request.
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/v3/organizations/{organizationId}"),
            path_params=[param[str]("organizationId", organization_id)],
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            body=json_body[OrganizationUpdateRequestDto | OrganizationUpdateRequestDtoDict](body),
            decoder=async_json_decoder[OrganizationResponseDto],
            error_mapper=update_organization_error_mapper,
            request_options=request_options,
        )
