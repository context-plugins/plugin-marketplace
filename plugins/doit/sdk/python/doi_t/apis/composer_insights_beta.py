from __future__ import annotations

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    AllSchemes,
    AnySchemes,
    ApiResult,
    AsyncAllSchemes,
    AsyncAnySchemes,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    RawClient,
    RequestOptionsOrDict,
    SecuredRawResponse,
    async_json_decoder,
    json_decoder,
    param,
    unwrap,
)
from ..errors.list_composer_recipe_results_error import (
    ListComposerRecipeResultsErrorBody,
    list_composer_recipe_results_error_mapper,
)
from ..errors.list_composer_recipes_error import ListComposerRecipesErrorBody, list_composer_recipes_error_mapper
from ..models.composer_recipe_list import ComposerRecipeList
from ..models.composer_recipe_result_list import ComposerRecipeResultList
from ..models.enums.sort_by1 import SortBy1, SortBy1OrStr
from ..models.enums.sort_by_doi_t_composer_insights_beta_api import (
    SortByDoiTComposerInsightsBetaApi,
    SortByDoiTComposerInsightsBetaApiOrStr,
)
from ..models.enums.sort_order import SortOrder, SortOrderOrStr
from ..server.server import Server


class ComposerInsightsBeta:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = ComposerInsightsBetaWithRawResponse(client, server, auth)

    def list_composer_recipe_results(
        self,
        recipe_id: int,
        *,
        max_results: int | None = 50,
        page_token: str | None = None,
        sort_by: SortBy1OrStr | None = SortBy1.DETECTION_TIME,
        sort_order: SortOrderOrStr | None = SortOrder.DESC,
        filter_: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ComposerRecipeResultList:
        """Returns the results of one Composer recipe: one finding per affected resource, with the resource's account,
        region, tags and cost metrics. An unknown recipe, one your customer isn't entitled to, and a dismissed recipe
        all return ``200`` with an empty ``items`` list and ``rowCount: 0``.

        By default (``last_scan_only:true``) only results reported by the most recent scan of each recently scanned
        account are returned. A resolved result keeps the ID of the last scan that reported it, so resolved results
        rarely appear by default; add ``last_scan_only:false`` to include them and results from earlier scans.
        ``rowCount`` can therefore be lower than the recipe's ``totalResultsCount``. Results are sorted by
        ``detection_time``, descending, by default. Ties break by ``id``.

        ``filter`` is one string of ``key:value`` clauses: ``,`` separates alternative values for one key (OR) and ``|``
        separates keys (AND), for example ``region:us-east-1,us-west-2|status:active``. Because ``,`` and ``|`` are
        separators, a value itself can't contain them. Supported keys:
        - ``account_id``: one or more cloud account IDs, matched exactly.
        - ``region``: one or more cloud regions, matched exactly.
        - ``issued_resource_name``: one or more names of the affected resource, matched exactly.
        - ``related_resource_name``: one or more names of related resources (for example an attached IAM policy), each
            matched as a substring anywhere in the result's related-resource details.
        - ``status``: exactly one of ``active`` (not resolved and not snoozed), ``snoozed``, ``resolved`` or ``all``.
            Omitting it is the same as ``all``. Combine ``resolved`` with ``last_scan_only:false``; with the default it
            usually returns nothing.
        - ``last_scan_only``: exactly one of ``true`` or ``false``. Defaults to ``true``, which returns only results
            reported by each recently scanned account's most recent scan, and so rarely includes resolved results.
            ``false`` returns results from every scan and account, including resolved ones.
        - ``allocation``: up to 10 distinct allocation IDs from ``GET /analytics/v1/allocations``. Returns only results
            on resources in any of those allocations. An allocation you can't view returns ``404``; if access can't be
            checked, the request returns ``503`` rather than unfiltered data.

        Requests are always served for the customer your API token belongs to.

        Args:
            recipe_id: ID of the Composer recipe whose results to list. Get recipe IDs from ``GET
                /insights/v2/recipes``.
            max_results: Maximum number of items to return on one page, from 1 to 500. Defaults to 50. A value outside
                that range returns ``400 validation_failed``.
            page_token: Continuation token from the ``pageToken`` of the previous response. Omit it on the first
                request; a response without ``pageToken`` is the last page. The token records the position, the sort and
                the ``allocation`` filter IDs. Changing ``sortBy``, ``sortOrder`` or the allocation IDs while paginating
                returns ``400 pagination_token_invalid``. Keep the other ``filter`` keys and ``maxResults`` unchanged
                while paginating. Tokens expire 5 minutes after they are issued; an expired token returns ``400
                pagination_token_expired``. In both cases, restart from the first page.
            sort_by: Field to sort results by. Defaults to ``detection_time``. Ties break by ``id`` (ascending),
                whatever the ``sortOrder``.
            sort_order: Sort direction for ``sortBy``. Defaults to ``desc``.
            filter_: Restricts the results returned. One string of ``key:value`` clauses: ``,`` separates alternative
                values for one key (OR) and ``|`` separates keys (AND). For example,
                ``region:us-east-1,us-west-2|status:active`` returns active results in either region. Because ``,`` and
                ``|`` are separators, a value itself can't contain them. Matching is exact unless a key says otherwise.
                Omit ``filter`` to list the recipe's results from the most recent scan of each recently scanned account,
                in every status. Keys: - ``account_id``: one or more cloud account IDs, matched exactly. - ``region``:
                one or more cloud regions, matched exactly. - ``issued_resource_name``: one or more names of the
                affected resource, matched exactly. - ``related_resource_name``: one or more names of resources related
                to the result (for example, an attached IAM policy). Each value is matched as a substring anywhere in
                the result's related-resource details, not only against names. - ``status``: exactly one of ``active``
                (not resolved and not snoozed), ``snoozed``, ``resolved`` or ``all``. Omitting it is the same as
                ``all``. Combine ``resolved`` with ``last_scan_only:false``; with the default it usually returns
                nothing. - ``last_scan_only``: exactly one of ``true`` or ``false``. Defaults to ``true``, which returns
                only results reported by each recently scanned account's most recent scan. A resolved result keeps the
                ID of the last scan that reported it, so resolved results rarely appear by default. ``false`` returns
                results from every scan and account, including resolved ones. - ``allocation``: up to 10 distinct
                allocation IDs (duplicates are ignored); get allocation IDs from ``GET /analytics/v1/allocations``.
                Matches results on resources in any of those allocations, as resolved by Cloud Analytics; ``rowCount``
                then counts only those results. You must be able to view every listed allocation. Service-account API
                keys can use public allocations only. If allocation access can't be checked, the request returns ``503``
                with ``Retry-After`` and never falls back to unfiltered data. Errors: - An unknown key returns ``400
                filter_key_not_supported`` when it's the only problem, otherwise ``400 validation_failed``. - A
                ``status`` outside the allowed list, a non-boolean ``last_scan_only``, more than one ``status`` or
                ``last_scan_only`` value, more than 10 distinct allocation IDs, an invalid allocation ID (blank, longer
                than 256 characters, or containing ``/``, whitespace or control characters), a malformed expression or
                an unsupported operator returns ``400 validation_failed``. - An allocation that doesn't exist or that
                you can't view returns ``404 composer-api.allocation_not_found``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK - A page of the recipe's results matching the request.

        Raises:
            ApiError: Syntactically malformed request, missing required parameter, or unsupported parameter value.
                Missing or invalid credentials. Authenticated but not authorized to perform this request. An
                ``allocation`` filter value doesn't exist or you can't view it. Unexpected server error. Service
                temporarily unavailable; retry after the indicated delay. ``error`` is ``ProblemDetails | RawError``."""
        return unwrap(
            self._with_raw_response.list_composer_recipe_results(
                recipe_id,
                max_results=max_results,
                page_token=page_token,
                sort_by=sort_by,
                sort_order=sort_order,
                filter_=filter_,
                request_options=request_options,
            ),
        )

    def list_composer_recipes(
        self,
        *,
        max_results: int | None = 50,
        page_token: str | None = None,
        sort_by: SortByDoiTComposerInsightsBetaApiOrStr | None = SortByDoiTComposerInsightsBetaApi.SEVERITY,
        sort_order: SortOrderOrStr | None = SortOrder.DESC,
        filter_: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ComposerRecipeList:
        """Returns the Composer recipes that have results in your recently scanned cloud accounts, with counts of those
        results by status and their estimated savings. Recipes with no such results are not listed. Dismissed recipes
        are listed with ``status: dismissed`` and every count set to 0.

        Recipes are sorted by ``severity``, descending, by default. Ties break by title (case-insensitive), then by
        ``id``.

        ``filter`` is one string of ``key:value`` clauses: ``,`` separates alternative values for one key (OR) and ``|``
        separates keys (AND), for example ``severity:critical,high|provider:aws,gcp``. Because ``,`` and ``|`` are
        separators, a value itself can't contain them. Supported keys:
        - ``provider``: one or more of ``aws``, ``azure``, ``azure_ad``, ``gcp``, ``general``, ``google_cloud_source``,
            ``google_workspace``, ``k8s``, ``oci``, ``vmware``.
        - ``severity``: one or more of ``critical``, ``high``, ``medium``, ``low``.
        - ``pillar``: one or more of ``cost``, ``operations``, ``performance``, ``security``, ``compliance``.
            ``compliance`` matches recipes tagged with at least one compliance standard.
        - ``has_active_results``: exactly one of ``true`` or ``false``.
        - ``allocation``: up to 10 distinct allocation IDs from ``GET /analytics/v1/allocations``. Lists only recipes
            with results on resources in any of those allocations; counts, savings and ``rowCount`` then cover only
            those resources. An allocation you can't view returns ``404``; if access can't be checked, the request
            returns ``503`` rather than unfiltered data.

        Requests are always served for the customer your API token belongs to. To list the results of one recipe, use
        its ``id`` with ``GET /insights/v2/recipes/{recipeId}/results``.

        Args:
            max_results: Maximum number of items to return on one page, from 1 to 500. Defaults to 50. A value outside
                that range returns ``400 validation_failed``.
            page_token: Continuation token from the ``pageToken`` of the previous response. Omit it on the first
                request; a response without ``pageToken`` is the last page. The token records the position, the sort and
                the ``allocation`` filter IDs. Changing ``sortBy``, ``sortOrder`` or the allocation IDs while paginating
                returns ``400 pagination_token_invalid``. Keep the other ``filter`` keys and ``maxResults`` unchanged
                while paginating. Tokens expire 5 minutes after they are issued; an expired token returns ``400
                pagination_token_expired``. In both cases, restart from the first page.
            sort_by: Field to sort recipes by. Defaults to ``severity``. Ties break by title (case-insensitive,
                ascending), then by ``id`` (ascending), whatever the ``sortOrder``.
            sort_order: Sort direction for ``sortBy``. Defaults to ``desc``.
            filter_: Restricts the recipes returned. One string of ``key:value`` clauses: ``,`` separates alternative
                values for one key (OR) and ``|`` separates keys (AND). For example,
                ``severity:critical,high|provider:aws,gcp`` returns recipes whose severity is critical or high and whose
                provider is Amazon Web Services or Google Cloud Platform. Because ``,`` and ``|`` are separators, a
                value itself can't contain them. Only equality matching is supported. Omit ``filter`` to list every
                recipe that has results in your recently scanned accounts, including dismissed recipes. Keys: -
                ``provider``: one or more of ``aws``, ``azure``, ``azure_ad``, ``gcp``, ``general``,
                ``google_cloud_source``, ``google_workspace``, ``k8s``, ``oci``, ``vmware``. - ``severity``: one or more
                of ``critical``, ``high``, ``medium``, ``low``. - ``pillar``: one or more of ``cost``, ``operations``,
                ``performance``, ``security``, ``compliance``. Matches recipes tagged with that pillar; ``compliance``
                matches recipes tagged with at least one compliance standard (such as SOC2 or HIPAA). -
                ``has_active_results``: exactly one of ``true`` or ``false``. - ``allocation``: up to 10 distinct
                allocation IDs (duplicates are ignored); get allocation IDs from ``GET /analytics/v1/allocations``.
                Matches recipes with results on resources in any of those allocations, as resolved by Cloud Analytics;
                counts, savings and ``rowCount`` then cover only those resources. You must be able to view every listed
                allocation. Service-account API keys can use public allocations only. If allocation access can't be
                checked, the request returns ``503`` with ``Retry-After`` and never falls back to unfiltered data.
                Errors: - An unknown key returns ``400 filter_key_not_supported`` when it's the only problem, otherwise
                ``400 validation_failed``. - A value outside the allowed list, a non-boolean ``has_active_results``,
                more than one ``has_active_results`` value, more than 10 distinct allocation IDs, an invalid allocation
                ID (blank, longer than 256 characters, or containing ``/``, whitespace or control characters), a
                malformed expression or an unsupported operator returns ``400 validation_failed``. - An allocation that
                doesn't exist or that you can't view returns ``404 composer-api.allocation_not_found``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK - A page of recipes matching the request.

        Raises:
            ApiError: Syntactically malformed request, missing required parameter, or unsupported parameter value.
                Missing or invalid credentials. Authenticated but not authorized to perform this request. An
                ``allocation`` filter value doesn't exist or you can't view it. Unexpected server error. Service
                temporarily unavailable; retry after the indicated delay. ``error`` is ``ProblemDetails | RawError``."""
        return unwrap(
            self._with_raw_response.list_composer_recipes(
                max_results=max_results,
                page_token=page_token,
                sort_by=sort_by,
                sort_order=sort_order,
                filter_=filter_,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> ComposerInsightsBetaWithRawResponse:
        return self._with_raw_response


class AsyncComposerInsightsBeta:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncComposerInsightsBetaWithRawResponse(client, server, auth)

    async def list_composer_recipe_results(
        self,
        recipe_id: int,
        *,
        max_results: int | None = 50,
        page_token: str | None = None,
        sort_by: SortBy1OrStr | None = SortBy1.DETECTION_TIME,
        sort_order: SortOrderOrStr | None = SortOrder.DESC,
        filter_: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ComposerRecipeResultList:
        """Returns the results of one Composer recipe: one finding per affected resource, with the resource's account,
        region, tags and cost metrics. An unknown recipe, one your customer isn't entitled to, and a dismissed recipe
        all return ``200`` with an empty ``items`` list and ``rowCount: 0``.

        By default (``last_scan_only:true``) only results reported by the most recent scan of each recently scanned
        account are returned. A resolved result keeps the ID of the last scan that reported it, so resolved results
        rarely appear by default; add ``last_scan_only:false`` to include them and results from earlier scans.
        ``rowCount`` can therefore be lower than the recipe's ``totalResultsCount``. Results are sorted by
        ``detection_time``, descending, by default. Ties break by ``id``.

        ``filter`` is one string of ``key:value`` clauses: ``,`` separates alternative values for one key (OR) and ``|``
        separates keys (AND), for example ``region:us-east-1,us-west-2|status:active``. Because ``,`` and ``|`` are
        separators, a value itself can't contain them. Supported keys:
        - ``account_id``: one or more cloud account IDs, matched exactly.
        - ``region``: one or more cloud regions, matched exactly.
        - ``issued_resource_name``: one or more names of the affected resource, matched exactly.
        - ``related_resource_name``: one or more names of related resources (for example an attached IAM policy), each
            matched as a substring anywhere in the result's related-resource details.
        - ``status``: exactly one of ``active`` (not resolved and not snoozed), ``snoozed``, ``resolved`` or ``all``.
            Omitting it is the same as ``all``. Combine ``resolved`` with ``last_scan_only:false``; with the default it
            usually returns nothing.
        - ``last_scan_only``: exactly one of ``true`` or ``false``. Defaults to ``true``, which returns only results
            reported by each recently scanned account's most recent scan, and so rarely includes resolved results.
            ``false`` returns results from every scan and account, including resolved ones.
        - ``allocation``: up to 10 distinct allocation IDs from ``GET /analytics/v1/allocations``. Returns only results
            on resources in any of those allocations. An allocation you can't view returns ``404``; if access can't be
            checked, the request returns ``503`` rather than unfiltered data.

        Requests are always served for the customer your API token belongs to.

        Args:
            recipe_id: ID of the Composer recipe whose results to list. Get recipe IDs from ``GET
                /insights/v2/recipes``.
            max_results: Maximum number of items to return on one page, from 1 to 500. Defaults to 50. A value outside
                that range returns ``400 validation_failed``.
            page_token: Continuation token from the ``pageToken`` of the previous response. Omit it on the first
                request; a response without ``pageToken`` is the last page. The token records the position, the sort and
                the ``allocation`` filter IDs. Changing ``sortBy``, ``sortOrder`` or the allocation IDs while paginating
                returns ``400 pagination_token_invalid``. Keep the other ``filter`` keys and ``maxResults`` unchanged
                while paginating. Tokens expire 5 minutes after they are issued; an expired token returns ``400
                pagination_token_expired``. In both cases, restart from the first page.
            sort_by: Field to sort results by. Defaults to ``detection_time``. Ties break by ``id`` (ascending),
                whatever the ``sortOrder``.
            sort_order: Sort direction for ``sortBy``. Defaults to ``desc``.
            filter_: Restricts the results returned. One string of ``key:value`` clauses: ``,`` separates alternative
                values for one key (OR) and ``|`` separates keys (AND). For example,
                ``region:us-east-1,us-west-2|status:active`` returns active results in either region. Because ``,`` and
                ``|`` are separators, a value itself can't contain them. Matching is exact unless a key says otherwise.
                Omit ``filter`` to list the recipe's results from the most recent scan of each recently scanned account,
                in every status. Keys: - ``account_id``: one or more cloud account IDs, matched exactly. - ``region``:
                one or more cloud regions, matched exactly. - ``issued_resource_name``: one or more names of the
                affected resource, matched exactly. - ``related_resource_name``: one or more names of resources related
                to the result (for example, an attached IAM policy). Each value is matched as a substring anywhere in
                the result's related-resource details, not only against names. - ``status``: exactly one of ``active``
                (not resolved and not snoozed), ``snoozed``, ``resolved`` or ``all``. Omitting it is the same as
                ``all``. Combine ``resolved`` with ``last_scan_only:false``; with the default it usually returns
                nothing. - ``last_scan_only``: exactly one of ``true`` or ``false``. Defaults to ``true``, which returns
                only results reported by each recently scanned account's most recent scan. A resolved result keeps the
                ID of the last scan that reported it, so resolved results rarely appear by default. ``false`` returns
                results from every scan and account, including resolved ones. - ``allocation``: up to 10 distinct
                allocation IDs (duplicates are ignored); get allocation IDs from ``GET /analytics/v1/allocations``.
                Matches results on resources in any of those allocations, as resolved by Cloud Analytics; ``rowCount``
                then counts only those results. You must be able to view every listed allocation. Service-account API
                keys can use public allocations only. If allocation access can't be checked, the request returns ``503``
                with ``Retry-After`` and never falls back to unfiltered data. Errors: - An unknown key returns ``400
                filter_key_not_supported`` when it's the only problem, otherwise ``400 validation_failed``. - A
                ``status`` outside the allowed list, a non-boolean ``last_scan_only``, more than one ``status`` or
                ``last_scan_only`` value, more than 10 distinct allocation IDs, an invalid allocation ID (blank, longer
                than 256 characters, or containing ``/``, whitespace or control characters), a malformed expression or
                an unsupported operator returns ``400 validation_failed``. - An allocation that doesn't exist or that
                you can't view returns ``404 composer-api.allocation_not_found``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK - A page of the recipe's results matching the request.

        Raises:
            ApiError: Syntactically malformed request, missing required parameter, or unsupported parameter value.
                Missing or invalid credentials. Authenticated but not authorized to perform this request. An
                ``allocation`` filter value doesn't exist or you can't view it. Unexpected server error. Service
                temporarily unavailable; retry after the indicated delay. ``error`` is ``ProblemDetails | RawError``."""
        return unwrap(
            await self._with_raw_response.list_composer_recipe_results(
                recipe_id,
                max_results=max_results,
                page_token=page_token,
                sort_by=sort_by,
                sort_order=sort_order,
                filter_=filter_,
                request_options=request_options,
            ),
        )

    async def list_composer_recipes(
        self,
        *,
        max_results: int | None = 50,
        page_token: str | None = None,
        sort_by: SortByDoiTComposerInsightsBetaApiOrStr | None = SortByDoiTComposerInsightsBetaApi.SEVERITY,
        sort_order: SortOrderOrStr | None = SortOrder.DESC,
        filter_: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ComposerRecipeList:
        """Returns the Composer recipes that have results in your recently scanned cloud accounts, with counts of those
        results by status and their estimated savings. Recipes with no such results are not listed. Dismissed recipes
        are listed with ``status: dismissed`` and every count set to 0.

        Recipes are sorted by ``severity``, descending, by default. Ties break by title (case-insensitive), then by
        ``id``.

        ``filter`` is one string of ``key:value`` clauses: ``,`` separates alternative values for one key (OR) and ``|``
        separates keys (AND), for example ``severity:critical,high|provider:aws,gcp``. Because ``,`` and ``|`` are
        separators, a value itself can't contain them. Supported keys:
        - ``provider``: one or more of ``aws``, ``azure``, ``azure_ad``, ``gcp``, ``general``, ``google_cloud_source``,
            ``google_workspace``, ``k8s``, ``oci``, ``vmware``.
        - ``severity``: one or more of ``critical``, ``high``, ``medium``, ``low``.
        - ``pillar``: one or more of ``cost``, ``operations``, ``performance``, ``security``, ``compliance``.
            ``compliance`` matches recipes tagged with at least one compliance standard.
        - ``has_active_results``: exactly one of ``true`` or ``false``.
        - ``allocation``: up to 10 distinct allocation IDs from ``GET /analytics/v1/allocations``. Lists only recipes
            with results on resources in any of those allocations; counts, savings and ``rowCount`` then cover only
            those resources. An allocation you can't view returns ``404``; if access can't be checked, the request
            returns ``503`` rather than unfiltered data.

        Requests are always served for the customer your API token belongs to. To list the results of one recipe, use
        its ``id`` with ``GET /insights/v2/recipes/{recipeId}/results``.

        Args:
            max_results: Maximum number of items to return on one page, from 1 to 500. Defaults to 50. A value outside
                that range returns ``400 validation_failed``.
            page_token: Continuation token from the ``pageToken`` of the previous response. Omit it on the first
                request; a response without ``pageToken`` is the last page. The token records the position, the sort and
                the ``allocation`` filter IDs. Changing ``sortBy``, ``sortOrder`` or the allocation IDs while paginating
                returns ``400 pagination_token_invalid``. Keep the other ``filter`` keys and ``maxResults`` unchanged
                while paginating. Tokens expire 5 minutes after they are issued; an expired token returns ``400
                pagination_token_expired``. In both cases, restart from the first page.
            sort_by: Field to sort recipes by. Defaults to ``severity``. Ties break by title (case-insensitive,
                ascending), then by ``id`` (ascending), whatever the ``sortOrder``.
            sort_order: Sort direction for ``sortBy``. Defaults to ``desc``.
            filter_: Restricts the recipes returned. One string of ``key:value`` clauses: ``,`` separates alternative
                values for one key (OR) and ``|`` separates keys (AND). For example,
                ``severity:critical,high|provider:aws,gcp`` returns recipes whose severity is critical or high and whose
                provider is Amazon Web Services or Google Cloud Platform. Because ``,`` and ``|`` are separators, a
                value itself can't contain them. Only equality matching is supported. Omit ``filter`` to list every
                recipe that has results in your recently scanned accounts, including dismissed recipes. Keys: -
                ``provider``: one or more of ``aws``, ``azure``, ``azure_ad``, ``gcp``, ``general``,
                ``google_cloud_source``, ``google_workspace``, ``k8s``, ``oci``, ``vmware``. - ``severity``: one or more
                of ``critical``, ``high``, ``medium``, ``low``. - ``pillar``: one or more of ``cost``, ``operations``,
                ``performance``, ``security``, ``compliance``. Matches recipes tagged with that pillar; ``compliance``
                matches recipes tagged with at least one compliance standard (such as SOC2 or HIPAA). -
                ``has_active_results``: exactly one of ``true`` or ``false``. - ``allocation``: up to 10 distinct
                allocation IDs (duplicates are ignored); get allocation IDs from ``GET /analytics/v1/allocations``.
                Matches recipes with results on resources in any of those allocations, as resolved by Cloud Analytics;
                counts, savings and ``rowCount`` then cover only those resources. You must be able to view every listed
                allocation. Service-account API keys can use public allocations only. If allocation access can't be
                checked, the request returns ``503`` with ``Retry-After`` and never falls back to unfiltered data.
                Errors: - An unknown key returns ``400 filter_key_not_supported`` when it's the only problem, otherwise
                ``400 validation_failed``. - A value outside the allowed list, a non-boolean ``has_active_results``,
                more than one ``has_active_results`` value, more than 10 distinct allocation IDs, an invalid allocation
                ID (blank, longer than 256 characters, or containing ``/``, whitespace or control characters), a
                malformed expression or an unsupported operator returns ``400 validation_failed``. - An allocation that
                doesn't exist or that you can't view returns ``404 composer-api.allocation_not_found``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK - A page of recipes matching the request.

        Raises:
            ApiError: Syntactically malformed request, missing required parameter, or unsupported parameter value.
                Missing or invalid credentials. Authenticated but not authorized to perform this request. An
                ``allocation`` filter value doesn't exist or you can't view it. Unexpected server error. Service
                temporarily unavailable; retry after the indicated delay. ``error`` is ``ProblemDetails | RawError``."""
        return unwrap(
            await self._with_raw_response.list_composer_recipes(
                max_results=max_results,
                page_token=page_token,
                sort_by=sort_by,
                sort_order=sort_order,
                filter_=filter_,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> AsyncComposerInsightsBetaWithRawResponse:
        return self._with_raw_response


class ComposerInsightsBetaWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def list_composer_recipe_results(
        self,
        recipe_id: int,
        *,
        max_results: int | None = 50,
        page_token: str | None = None,
        sort_by: SortBy1OrStr | None = SortBy1.DETECTION_TIME,
        sort_order: SortOrderOrStr | None = SortOrder.DESC,
        filter_: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ComposerRecipeResultList, ListComposerRecipeResultsErrorBody]:
        """Returns the results of one Composer recipe: one finding per affected resource, with the resource's account,
        region, tags and cost metrics. An unknown recipe, one your customer isn't entitled to, and a dismissed recipe
        all return ``200`` with an empty ``items`` list and ``rowCount: 0``.

        By default (``last_scan_only:true``) only results reported by the most recent scan of each recently scanned
        account are returned. A resolved result keeps the ID of the last scan that reported it, so resolved results
        rarely appear by default; add ``last_scan_only:false`` to include them and results from earlier scans.
        ``rowCount`` can therefore be lower than the recipe's ``totalResultsCount``. Results are sorted by
        ``detection_time``, descending, by default. Ties break by ``id``.

        ``filter`` is one string of ``key:value`` clauses: ``,`` separates alternative values for one key (OR) and ``|``
        separates keys (AND), for example ``region:us-east-1,us-west-2|status:active``. Because ``,`` and ``|`` are
        separators, a value itself can't contain them. Supported keys:
        - ``account_id``: one or more cloud account IDs, matched exactly.
        - ``region``: one or more cloud regions, matched exactly.
        - ``issued_resource_name``: one or more names of the affected resource, matched exactly.
        - ``related_resource_name``: one or more names of related resources (for example an attached IAM policy), each
            matched as a substring anywhere in the result's related-resource details.
        - ``status``: exactly one of ``active`` (not resolved and not snoozed), ``snoozed``, ``resolved`` or ``all``.
            Omitting it is the same as ``all``. Combine ``resolved`` with ``last_scan_only:false``; with the default it
            usually returns nothing.
        - ``last_scan_only``: exactly one of ``true`` or ``false``. Defaults to ``true``, which returns only results
            reported by each recently scanned account's most recent scan, and so rarely includes resolved results.
            ``false`` returns results from every scan and account, including resolved ones.
        - ``allocation``: up to 10 distinct allocation IDs from ``GET /analytics/v1/allocations``. Returns only results
            on resources in any of those allocations. An allocation you can't view returns ``404``; if access can't be
            checked, the request returns ``503`` rather than unfiltered data.

        Requests are always served for the customer your API token belongs to.

        Args:
            recipe_id: ID of the Composer recipe whose results to list. Get recipe IDs from ``GET
                /insights/v2/recipes``.
            max_results: Maximum number of items to return on one page, from 1 to 500. Defaults to 50. A value outside
                that range returns ``400 validation_failed``.
            page_token: Continuation token from the ``pageToken`` of the previous response. Omit it on the first
                request; a response without ``pageToken`` is the last page. The token records the position, the sort and
                the ``allocation`` filter IDs. Changing ``sortBy``, ``sortOrder`` or the allocation IDs while paginating
                returns ``400 pagination_token_invalid``. Keep the other ``filter`` keys and ``maxResults`` unchanged
                while paginating. Tokens expire 5 minutes after they are issued; an expired token returns ``400
                pagination_token_expired``. In both cases, restart from the first page.
            sort_by: Field to sort results by. Defaults to ``detection_time``. Ties break by ``id`` (ascending),
                whatever the ``sortOrder``.
            sort_order: Sort direction for ``sortBy``. Defaults to ``desc``.
            filter_: Restricts the results returned. One string of ``key:value`` clauses: ``,`` separates alternative
                values for one key (OR) and ``|`` separates keys (AND). For example,
                ``region:us-east-1,us-west-2|status:active`` returns active results in either region. Because ``,`` and
                ``|`` are separators, a value itself can't contain them. Matching is exact unless a key says otherwise.
                Omit ``filter`` to list the recipe's results from the most recent scan of each recently scanned account,
                in every status. Keys: - ``account_id``: one or more cloud account IDs, matched exactly. - ``region``:
                one or more cloud regions, matched exactly. - ``issued_resource_name``: one or more names of the
                affected resource, matched exactly. - ``related_resource_name``: one or more names of resources related
                to the result (for example, an attached IAM policy). Each value is matched as a substring anywhere in
                the result's related-resource details, not only against names. - ``status``: exactly one of ``active``
                (not resolved and not snoozed), ``snoozed``, ``resolved`` or ``all``. Omitting it is the same as
                ``all``. Combine ``resolved`` with ``last_scan_only:false``; with the default it usually returns
                nothing. - ``last_scan_only``: exactly one of ``true`` or ``false``. Defaults to ``true``, which returns
                only results reported by each recently scanned account's most recent scan. A resolved result keeps the
                ID of the last scan that reported it, so resolved results rarely appear by default. ``false`` returns
                results from every scan and account, including resolved ones. - ``allocation``: up to 10 distinct
                allocation IDs (duplicates are ignored); get allocation IDs from ``GET /analytics/v1/allocations``.
                Matches results on resources in any of those allocations, as resolved by Cloud Analytics; ``rowCount``
                then counts only those results. You must be able to view every listed allocation. Service-account API
                keys can use public allocations only. If allocation access can't be checked, the request returns ``503``
                with ``Retry-After`` and never falls back to unfiltered data. Errors: - An unknown key returns ``400
                filter_key_not_supported`` when it's the only problem, otherwise ``400 validation_failed``. - A
                ``status`` outside the allowed list, a non-boolean ``last_scan_only``, more than one ``status`` or
                ``last_scan_only`` value, more than 10 distinct allocation IDs, an invalid allocation ID (blank, longer
                than 256 characters, or containing ``/``, whitespace or control characters), a malformed expression or
                an unsupported operator returns ``400 validation_failed``. - An allocation that doesn't exist or that
                you can't view returns ``404 composer-api.allocation_not_found``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/insights/v2/recipes/{recipeId}/results"),
            path_params=[param[int]("recipeId", recipe_id)],
            query_params=[
                param[int | None]("maxResults", max_results),
                param[str | None]("pageToken", page_token),
                param[SortBy1OrStr | None]("sortBy", sort_by),
                param[SortOrderOrStr | None]("sortOrder", sort_order),
                param[str | None]("filter", filter_),
            ],
            auth_scheme=AnySchemes(self._auth.api_key, AllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=json_decoder[ComposerRecipeResultList],
            error_mapper=list_composer_recipe_results_error_mapper,
            request_options=request_options,
        )

    def list_composer_recipes(
        self,
        *,
        max_results: int | None = 50,
        page_token: str | None = None,
        sort_by: SortByDoiTComposerInsightsBetaApiOrStr | None = SortByDoiTComposerInsightsBetaApi.SEVERITY,
        sort_order: SortOrderOrStr | None = SortOrder.DESC,
        filter_: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ComposerRecipeList, ListComposerRecipesErrorBody]:
        """Returns the Composer recipes that have results in your recently scanned cloud accounts, with counts of those
        results by status and their estimated savings. Recipes with no such results are not listed. Dismissed recipes
        are listed with ``status: dismissed`` and every count set to 0.

        Recipes are sorted by ``severity``, descending, by default. Ties break by title (case-insensitive), then by
        ``id``.

        ``filter`` is one string of ``key:value`` clauses: ``,`` separates alternative values for one key (OR) and ``|``
        separates keys (AND), for example ``severity:critical,high|provider:aws,gcp``. Because ``,`` and ``|`` are
        separators, a value itself can't contain them. Supported keys:
        - ``provider``: one or more of ``aws``, ``azure``, ``azure_ad``, ``gcp``, ``general``, ``google_cloud_source``,
            ``google_workspace``, ``k8s``, ``oci``, ``vmware``.
        - ``severity``: one or more of ``critical``, ``high``, ``medium``, ``low``.
        - ``pillar``: one or more of ``cost``, ``operations``, ``performance``, ``security``, ``compliance``.
            ``compliance`` matches recipes tagged with at least one compliance standard.
        - ``has_active_results``: exactly one of ``true`` or ``false``.
        - ``allocation``: up to 10 distinct allocation IDs from ``GET /analytics/v1/allocations``. Lists only recipes
            with results on resources in any of those allocations; counts, savings and ``rowCount`` then cover only
            those resources. An allocation you can't view returns ``404``; if access can't be checked, the request
            returns ``503`` rather than unfiltered data.

        Requests are always served for the customer your API token belongs to. To list the results of one recipe, use
        its ``id`` with ``GET /insights/v2/recipes/{recipeId}/results``.

        Args:
            max_results: Maximum number of items to return on one page, from 1 to 500. Defaults to 50. A value outside
                that range returns ``400 validation_failed``.
            page_token: Continuation token from the ``pageToken`` of the previous response. Omit it on the first
                request; a response without ``pageToken`` is the last page. The token records the position, the sort and
                the ``allocation`` filter IDs. Changing ``sortBy``, ``sortOrder`` or the allocation IDs while paginating
                returns ``400 pagination_token_invalid``. Keep the other ``filter`` keys and ``maxResults`` unchanged
                while paginating. Tokens expire 5 minutes after they are issued; an expired token returns ``400
                pagination_token_expired``. In both cases, restart from the first page.
            sort_by: Field to sort recipes by. Defaults to ``severity``. Ties break by title (case-insensitive,
                ascending), then by ``id`` (ascending), whatever the ``sortOrder``.
            sort_order: Sort direction for ``sortBy``. Defaults to ``desc``.
            filter_: Restricts the recipes returned. One string of ``key:value`` clauses: ``,`` separates alternative
                values for one key (OR) and ``|`` separates keys (AND). For example,
                ``severity:critical,high|provider:aws,gcp`` returns recipes whose severity is critical or high and whose
                provider is Amazon Web Services or Google Cloud Platform. Because ``,`` and ``|`` are separators, a
                value itself can't contain them. Only equality matching is supported. Omit ``filter`` to list every
                recipe that has results in your recently scanned accounts, including dismissed recipes. Keys: -
                ``provider``: one or more of ``aws``, ``azure``, ``azure_ad``, ``gcp``, ``general``,
                ``google_cloud_source``, ``google_workspace``, ``k8s``, ``oci``, ``vmware``. - ``severity``: one or more
                of ``critical``, ``high``, ``medium``, ``low``. - ``pillar``: one or more of ``cost``, ``operations``,
                ``performance``, ``security``, ``compliance``. Matches recipes tagged with that pillar; ``compliance``
                matches recipes tagged with at least one compliance standard (such as SOC2 or HIPAA). -
                ``has_active_results``: exactly one of ``true`` or ``false``. - ``allocation``: up to 10 distinct
                allocation IDs (duplicates are ignored); get allocation IDs from ``GET /analytics/v1/allocations``.
                Matches recipes with results on resources in any of those allocations, as resolved by Cloud Analytics;
                counts, savings and ``rowCount`` then cover only those resources. You must be able to view every listed
                allocation. Service-account API keys can use public allocations only. If allocation access can't be
                checked, the request returns ``503`` with ``Retry-After`` and never falls back to unfiltered data.
                Errors: - An unknown key returns ``400 filter_key_not_supported`` when it's the only problem, otherwise
                ``400 validation_failed``. - A value outside the allowed list, a non-boolean ``has_active_results``,
                more than one ``has_active_results`` value, more than 10 distinct allocation IDs, an invalid allocation
                ID (blank, longer than 256 characters, or containing ``/``, whitespace or control characters), a
                malformed expression or an unsupported operator returns ``400 validation_failed``. - An allocation that
                doesn't exist or that you can't view returns ``404 composer-api.allocation_not_found``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/insights/v2/recipes"),
            query_params=[
                param[int | None]("maxResults", max_results),
                param[str | None]("pageToken", page_token),
                param[SortByDoiTComposerInsightsBetaApiOrStr | None]("sortBy", sort_by),
                param[SortOrderOrStr | None]("sortOrder", sort_order),
                param[str | None]("filter", filter_),
            ],
            auth_scheme=AnySchemes(self._auth.api_key, AllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=json_decoder[ComposerRecipeList],
            error_mapper=list_composer_recipes_error_mapper,
            request_options=request_options,
        )


class AsyncComposerInsightsBetaWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def list_composer_recipe_results(
        self,
        recipe_id: int,
        *,
        max_results: int | None = 50,
        page_token: str | None = None,
        sort_by: SortBy1OrStr | None = SortBy1.DETECTION_TIME,
        sort_order: SortOrderOrStr | None = SortOrder.DESC,
        filter_: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ComposerRecipeResultList, ListComposerRecipeResultsErrorBody]:
        """Returns the results of one Composer recipe: one finding per affected resource, with the resource's account,
        region, tags and cost metrics. An unknown recipe, one your customer isn't entitled to, and a dismissed recipe
        all return ``200`` with an empty ``items`` list and ``rowCount: 0``.

        By default (``last_scan_only:true``) only results reported by the most recent scan of each recently scanned
        account are returned. A resolved result keeps the ID of the last scan that reported it, so resolved results
        rarely appear by default; add ``last_scan_only:false`` to include them and results from earlier scans.
        ``rowCount`` can therefore be lower than the recipe's ``totalResultsCount``. Results are sorted by
        ``detection_time``, descending, by default. Ties break by ``id``.

        ``filter`` is one string of ``key:value`` clauses: ``,`` separates alternative values for one key (OR) and ``|``
        separates keys (AND), for example ``region:us-east-1,us-west-2|status:active``. Because ``,`` and ``|`` are
        separators, a value itself can't contain them. Supported keys:
        - ``account_id``: one or more cloud account IDs, matched exactly.
        - ``region``: one or more cloud regions, matched exactly.
        - ``issued_resource_name``: one or more names of the affected resource, matched exactly.
        - ``related_resource_name``: one or more names of related resources (for example an attached IAM policy), each
            matched as a substring anywhere in the result's related-resource details.
        - ``status``: exactly one of ``active`` (not resolved and not snoozed), ``snoozed``, ``resolved`` or ``all``.
            Omitting it is the same as ``all``. Combine ``resolved`` with ``last_scan_only:false``; with the default it
            usually returns nothing.
        - ``last_scan_only``: exactly one of ``true`` or ``false``. Defaults to ``true``, which returns only results
            reported by each recently scanned account's most recent scan, and so rarely includes resolved results.
            ``false`` returns results from every scan and account, including resolved ones.
        - ``allocation``: up to 10 distinct allocation IDs from ``GET /analytics/v1/allocations``. Returns only results
            on resources in any of those allocations. An allocation you can't view returns ``404``; if access can't be
            checked, the request returns ``503`` rather than unfiltered data.

        Requests are always served for the customer your API token belongs to.

        Args:
            recipe_id: ID of the Composer recipe whose results to list. Get recipe IDs from ``GET
                /insights/v2/recipes``.
            max_results: Maximum number of items to return on one page, from 1 to 500. Defaults to 50. A value outside
                that range returns ``400 validation_failed``.
            page_token: Continuation token from the ``pageToken`` of the previous response. Omit it on the first
                request; a response without ``pageToken`` is the last page. The token records the position, the sort and
                the ``allocation`` filter IDs. Changing ``sortBy``, ``sortOrder`` or the allocation IDs while paginating
                returns ``400 pagination_token_invalid``. Keep the other ``filter`` keys and ``maxResults`` unchanged
                while paginating. Tokens expire 5 minutes after they are issued; an expired token returns ``400
                pagination_token_expired``. In both cases, restart from the first page.
            sort_by: Field to sort results by. Defaults to ``detection_time``. Ties break by ``id`` (ascending),
                whatever the ``sortOrder``.
            sort_order: Sort direction for ``sortBy``. Defaults to ``desc``.
            filter_: Restricts the results returned. One string of ``key:value`` clauses: ``,`` separates alternative
                values for one key (OR) and ``|`` separates keys (AND). For example,
                ``region:us-east-1,us-west-2|status:active`` returns active results in either region. Because ``,`` and
                ``|`` are separators, a value itself can't contain them. Matching is exact unless a key says otherwise.
                Omit ``filter`` to list the recipe's results from the most recent scan of each recently scanned account,
                in every status. Keys: - ``account_id``: one or more cloud account IDs, matched exactly. - ``region``:
                one or more cloud regions, matched exactly. - ``issued_resource_name``: one or more names of the
                affected resource, matched exactly. - ``related_resource_name``: one or more names of resources related
                to the result (for example, an attached IAM policy). Each value is matched as a substring anywhere in
                the result's related-resource details, not only against names. - ``status``: exactly one of ``active``
                (not resolved and not snoozed), ``snoozed``, ``resolved`` or ``all``. Omitting it is the same as
                ``all``. Combine ``resolved`` with ``last_scan_only:false``; with the default it usually returns
                nothing. - ``last_scan_only``: exactly one of ``true`` or ``false``. Defaults to ``true``, which returns
                only results reported by each recently scanned account's most recent scan. A resolved result keeps the
                ID of the last scan that reported it, so resolved results rarely appear by default. ``false`` returns
                results from every scan and account, including resolved ones. - ``allocation``: up to 10 distinct
                allocation IDs (duplicates are ignored); get allocation IDs from ``GET /analytics/v1/allocations``.
                Matches results on resources in any of those allocations, as resolved by Cloud Analytics; ``rowCount``
                then counts only those results. You must be able to view every listed allocation. Service-account API
                keys can use public allocations only. If allocation access can't be checked, the request returns ``503``
                with ``Retry-After`` and never falls back to unfiltered data. Errors: - An unknown key returns ``400
                filter_key_not_supported`` when it's the only problem, otherwise ``400 validation_failed``. - A
                ``status`` outside the allowed list, a non-boolean ``last_scan_only``, more than one ``status`` or
                ``last_scan_only`` value, more than 10 distinct allocation IDs, an invalid allocation ID (blank, longer
                than 256 characters, or containing ``/``, whitespace or control characters), a malformed expression or
                an unsupported operator returns ``400 validation_failed``. - An allocation that doesn't exist or that
                you can't view returns ``404 composer-api.allocation_not_found``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/insights/v2/recipes/{recipeId}/results"),
            path_params=[param[int]("recipeId", recipe_id)],
            query_params=[
                param[int | None]("maxResults", max_results),
                param[str | None]("pageToken", page_token),
                param[SortBy1OrStr | None]("sortBy", sort_by),
                param[SortOrderOrStr | None]("sortOrder", sort_order),
                param[str | None]("filter", filter_),
            ],
            auth_scheme=AsyncAnySchemes(self._auth.api_key, AsyncAllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=async_json_decoder[ComposerRecipeResultList],
            error_mapper=list_composer_recipe_results_error_mapper,
            request_options=request_options,
        )

    async def list_composer_recipes(
        self,
        *,
        max_results: int | None = 50,
        page_token: str | None = None,
        sort_by: SortByDoiTComposerInsightsBetaApiOrStr | None = SortByDoiTComposerInsightsBetaApi.SEVERITY,
        sort_order: SortOrderOrStr | None = SortOrder.DESC,
        filter_: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ComposerRecipeList, ListComposerRecipesErrorBody]:
        """Returns the Composer recipes that have results in your recently scanned cloud accounts, with counts of those
        results by status and their estimated savings. Recipes with no such results are not listed. Dismissed recipes
        are listed with ``status: dismissed`` and every count set to 0.

        Recipes are sorted by ``severity``, descending, by default. Ties break by title (case-insensitive), then by
        ``id``.

        ``filter`` is one string of ``key:value`` clauses: ``,`` separates alternative values for one key (OR) and ``|``
        separates keys (AND), for example ``severity:critical,high|provider:aws,gcp``. Because ``,`` and ``|`` are
        separators, a value itself can't contain them. Supported keys:
        - ``provider``: one or more of ``aws``, ``azure``, ``azure_ad``, ``gcp``, ``general``, ``google_cloud_source``,
            ``google_workspace``, ``k8s``, ``oci``, ``vmware``.
        - ``severity``: one or more of ``critical``, ``high``, ``medium``, ``low``.
        - ``pillar``: one or more of ``cost``, ``operations``, ``performance``, ``security``, ``compliance``.
            ``compliance`` matches recipes tagged with at least one compliance standard.
        - ``has_active_results``: exactly one of ``true`` or ``false``.
        - ``allocation``: up to 10 distinct allocation IDs from ``GET /analytics/v1/allocations``. Lists only recipes
            with results on resources in any of those allocations; counts, savings and ``rowCount`` then cover only
            those resources. An allocation you can't view returns ``404``; if access can't be checked, the request
            returns ``503`` rather than unfiltered data.

        Requests are always served for the customer your API token belongs to. To list the results of one recipe, use
        its ``id`` with ``GET /insights/v2/recipes/{recipeId}/results``.

        Args:
            max_results: Maximum number of items to return on one page, from 1 to 500. Defaults to 50. A value outside
                that range returns ``400 validation_failed``.
            page_token: Continuation token from the ``pageToken`` of the previous response. Omit it on the first
                request; a response without ``pageToken`` is the last page. The token records the position, the sort and
                the ``allocation`` filter IDs. Changing ``sortBy``, ``sortOrder`` or the allocation IDs while paginating
                returns ``400 pagination_token_invalid``. Keep the other ``filter`` keys and ``maxResults`` unchanged
                while paginating. Tokens expire 5 minutes after they are issued; an expired token returns ``400
                pagination_token_expired``. In both cases, restart from the first page.
            sort_by: Field to sort recipes by. Defaults to ``severity``. Ties break by title (case-insensitive,
                ascending), then by ``id`` (ascending), whatever the ``sortOrder``.
            sort_order: Sort direction for ``sortBy``. Defaults to ``desc``.
            filter_: Restricts the recipes returned. One string of ``key:value`` clauses: ``,`` separates alternative
                values for one key (OR) and ``|`` separates keys (AND). For example,
                ``severity:critical,high|provider:aws,gcp`` returns recipes whose severity is critical or high and whose
                provider is Amazon Web Services or Google Cloud Platform. Because ``,`` and ``|`` are separators, a
                value itself can't contain them. Only equality matching is supported. Omit ``filter`` to list every
                recipe that has results in your recently scanned accounts, including dismissed recipes. Keys: -
                ``provider``: one or more of ``aws``, ``azure``, ``azure_ad``, ``gcp``, ``general``,
                ``google_cloud_source``, ``google_workspace``, ``k8s``, ``oci``, ``vmware``. - ``severity``: one or more
                of ``critical``, ``high``, ``medium``, ``low``. - ``pillar``: one or more of ``cost``, ``operations``,
                ``performance``, ``security``, ``compliance``. Matches recipes tagged with that pillar; ``compliance``
                matches recipes tagged with at least one compliance standard (such as SOC2 or HIPAA). -
                ``has_active_results``: exactly one of ``true`` or ``false``. - ``allocation``: up to 10 distinct
                allocation IDs (duplicates are ignored); get allocation IDs from ``GET /analytics/v1/allocations``.
                Matches recipes with results on resources in any of those allocations, as resolved by Cloud Analytics;
                counts, savings and ``rowCount`` then cover only those resources. You must be able to view every listed
                allocation. Service-account API keys can use public allocations only. If allocation access can't be
                checked, the request returns ``503`` with ``Retry-After`` and never falls back to unfiltered data.
                Errors: - An unknown key returns ``400 filter_key_not_supported`` when it's the only problem, otherwise
                ``400 validation_failed``. - A value outside the allowed list, a non-boolean ``has_active_results``,
                more than one ``has_active_results`` value, more than 10 distinct allocation IDs, an invalid allocation
                ID (blank, longer than 256 characters, or containing ``/``, whitespace or control characters), a
                malformed expression or an unsupported operator returns ``400 validation_failed``. - An allocation that
                doesn't exist or that you can't view returns ``404 composer-api.allocation_not_found``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/insights/v2/recipes"),
            query_params=[
                param[int | None]("maxResults", max_results),
                param[str | None]("pageToken", page_token),
                param[SortByDoiTComposerInsightsBetaApiOrStr | None]("sortBy", sort_by),
                param[SortOrderOrStr | None]("sortOrder", sort_order),
                param[str | None]("filter", filter_),
            ],
            auth_scheme=AsyncAnySchemes(self._auth.api_key, AsyncAllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=async_json_decoder[ComposerRecipeList],
            error_mapper=list_composer_recipes_error_mapper,
            request_options=request_options,
        )
