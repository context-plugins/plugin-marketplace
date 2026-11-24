from __future__ import annotations

from uuid import UUID, uuid4

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    ApiResult,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    RawClient,
    RequestOptionsOrDict,
    RFC3339DateTime,
    SecuredRawResponse,
    async_json_decoder,
    json_body,
    json_decoder,
    param,
    unwrap,
)
from ..errors.bulk_create_links_error import BulkCreateLinksErrorBody, bulk_create_links_error_mapper
from ..errors.bulk_delete_links_error import BulkDeleteLinksErrorBody, bulk_delete_links_error_mapper
from ..errors.create_link_error import CreateLinkErrorBody, create_link_error_mapper
from ..errors.delete_link_error import DeleteLinkErrorBody, delete_link_error_mapper
from ..errors.get_link_info_error import GetLinkInfoErrorBody, get_link_info_error_mapper
from ..errors.get_links_count_error import GetLinksCountErrorBody, get_links_count_error_mapper
from ..errors.get_links_error import GetLinksErrorBody, get_links_error_mapper
from ..errors.update_link_error import UpdateLinkErrorBody, update_link_error_mapper
from ..models.enums.sort import Sort, SortOrStr
from ..models.geo1 import Geo1, Geo1Dict
from ..models.link_codeqr_io_links_api import LinkCodeqrIoLinksApi
from ..models.links_bulk_request import LinksBulkRequest, LinksBulkRequestDict
from ..models.links_bulk_response import LinksBulkResponse
from ..models.links_request import LinksRequest, LinksRequestDict
from ..models.links_request1 import LinksRequest1, LinksRequest1Dict
from ..models.links_response import LinksResponse
from ..models.unions.group_by4 import GroupBy4, GroupBy4Dict
from ..models.unions.link_ids import LinkIds, LinkIdsDict
from ..models.unions.links_bulk_response1 import LinksBulkResponse1
from ..models.unions.tag_ids_model import TagIdsModel, TagIdsModelDict
from ..models.unions.tag_names import TagNames, TagNamesDict
from ..server.server import Server


class Links:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = LinksWithRawResponse(client, server, auth)

    def bulk_create_links(
        self,
        *,
        body: list[LinksBulkRequest | LinksBulkRequestDict] | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> list[LinksBulkResponse1]:
        """Bulk create up to 100 links for the authenticated workspace.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The created links

        Raises:
            ApiError: The server cannot or will not process the request due to something that is perceived to be a
                client error (e.g., malformed request syntax, invalid request message framing, or deceptive request
                routing). Although the HTTP standard specifies "unauthorized", semantically this response means
                "unauthenticated". That is, the client must authenticate itself to get the requested response. The
                client does not have access rights to the content; that is, it is unauthorized, so the server is
                refusing to give the requested resource. Unlike 401 Unauthorized, the client's identity is known to the
                server. The server cannot find the requested resource. This response is sent when a request conflicts
                with the current state of the server. This response is sent when the requested content has been
                permanently deleted from server, with no forwarding address. The request was well-formed but was unable
                to be followed due to semantic errors. The user has sent too many requests in a given amount of time
                ("rate limiting") The server has encountered a situation it does not know how to handle. ``error`` is
                ``M4001 | RawError``."""
        return unwrap(self._with_raw_response.bulk_create_links(body=body, request_options=request_options))

    def bulk_delete_links(
        self, link_ids: list[str], *, request_options: RequestOptionsOrDict | None = None
    ) -> LinksBulkResponse:
        """Bulk delete up to 100 links for the authenticated workspace.

        Args:
            link_ids: Comma-separated list of link IDs to delete. Maximum of 100 IDs. Non-existing IDs will be ignored.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The deleted links count.

        Raises:
            ApiError: The server cannot or will not process the request due to something that is perceived to be a
                client error (e.g., malformed request syntax, invalid request message framing, or deceptive request
                routing). Although the HTTP standard specifies "unauthorized", semantically this response means
                "unauthenticated". That is, the client must authenticate itself to get the requested response. The
                client does not have access rights to the content; that is, it is unauthorized, so the server is
                refusing to give the requested resource. Unlike 401 Unauthorized, the client's identity is known to the
                server. The server cannot find the requested resource. This response is sent when a request conflicts
                with the current state of the server. This response is sent when the requested content has been
                permanently deleted from server, with no forwarding address. The request was well-formed but was unable
                to be followed due to semantic errors. The user has sent too many requests in a given amount of time
                ("rate limiting") The server has encountered a situation it does not know how to handle. ``error`` is
                ``M4001 | RawError``."""
        return unwrap(self._with_raw_response.bulk_delete_links(link_ids, request_options=request_options))

    def create_link(
        self,
        *,
        body: LinksRequest | LinksRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> LinkCodeqrIoLinksApi:
        """Create a new link for the authenticated workspace.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The created link

        Raises:
            ApiError: The server cannot or will not process the request due to something that is perceived to be a
                client error (e.g., malformed request syntax, invalid request message framing, or deceptive request
                routing). Although the HTTP standard specifies "unauthorized", semantically this response means
                "unauthenticated". That is, the client must authenticate itself to get the requested response. The
                client does not have access rights to the content; that is, it is unauthorized, so the server is
                refusing to give the requested resource. Unlike 401 Unauthorized, the client's identity is known to the
                server. The server cannot find the requested resource. This response is sent when a request conflicts
                with the current state of the server. This response is sent when the requested content has been
                permanently deleted from server, with no forwarding address. The request was well-formed but was unable
                to be followed due to semantic errors. The user has sent too many requests in a given amount of time
                ("rate limiting") The server has encountered a situation it does not know how to handle. ``error`` is
                ``M4001 | RawError``."""
        return unwrap(self._with_raw_response.create_link(body=body, request_options=request_options))

    def delete_link(self, link_id: str, *, request_options: RequestOptionsOrDict | None = None) -> LinksResponse:
        """Delete a link for the authenticated workspace.

        Args:
            link_id: The id of the link to delete. You may use either ``linkId`` (obtained via ``/links/info`` endpoint)
                or ``externalId`` prefixed with ``ext_``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The deleted link ID.

        Raises:
            ApiError: The server cannot or will not process the request due to something that is perceived to be a
                client error (e.g., malformed request syntax, invalid request message framing, or deceptive request
                routing). Although the HTTP standard specifies "unauthorized", semantically this response means
                "unauthenticated". That is, the client must authenticate itself to get the requested response. The
                client does not have access rights to the content; that is, it is unauthorized, so the server is
                refusing to give the requested resource. Unlike 401 Unauthorized, the client's identity is known to the
                server. The server cannot find the requested resource. This response is sent when a request conflicts
                with the current state of the server. This response is sent when the requested content has been
                permanently deleted from server, with no forwarding address. The request was well-formed but was unable
                to be followed due to semantic errors. The user has sent too many requests in a given amount of time
                ("rate limiting") The server has encountered a situation it does not know how to handle. ``error`` is
                ``M4001 | RawError``."""
        return unwrap(self._with_raw_response.delete_link(link_id, request_options=request_options))

    def get_link_info(
        self,
        project_slug: str,
        domain: str,
        key: str,
        *,
        link_id: str | None = None,
        external_id: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> LinkCodeqrIoLinksApi:
        """Retrieve the info for a link.

        Args:
            project_slug: The slug of the project to which the link belongs. For example, for ``app.codeqr.io/acme``,
                the projectSlug is ``acme``.
            domain: Value sent with the request.
            key: The key of the link to be retrieved. For example, for ``codeqr.link/github``, the key is ``github``.
            link_id: The unique ID of the short link.
            external_id: This is the ID of the link in your database. Must be prefixed with ``ext_`` when passed as a
                query parameter.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The retrieved link

        Raises:
            ApiError: The server cannot or will not process the request due to something that is perceived to be a
                client error (e.g., malformed request syntax, invalid request message framing, or deceptive request
                routing). Although the HTTP standard specifies "unauthorized", semantically this response means
                "unauthenticated". That is, the client must authenticate itself to get the requested response. The
                client does not have access rights to the content; that is, it is unauthorized, so the server is
                refusing to give the requested resource. Unlike 401 Unauthorized, the client's identity is known to the
                server. The server cannot find the requested resource. This response is sent when a request conflicts
                with the current state of the server. This response is sent when the requested content has been
                permanently deleted from server, with no forwarding address. The request was well-formed but was unable
                to be followed due to semantic errors. The user has sent too many requests in a given amount of time
                ("rate limiting") The server has encountered a situation it does not know how to handle. ``error`` is
                ``M4001 | RawError``."""
        return unwrap(
            self._with_raw_response.get_link_info(
                project_slug, domain, key, link_id=link_id, external_id=external_id, request_options=request_options
            ),
        )

    def get_links(
        self,
        *,
        project_slug: str | None = None,
        domain: str | None = None,
        tag_id: str | None = None,
        tag_ids: TagIdsModel | TagIdsModelDict | None = None,
        tag_names: TagNames | TagNamesDict | None = None,
        folder_id: str | None = None,
        search: str | None = None,
        user_id: str | None = None,
        show_archived: bool | None = False,
        password: str | None = None,
        expires_at: RFC3339DateTime | None = None,
        geo: Geo1 | Geo1Dict | None = None,
        ios: str | None = None,
        android: str | None = None,
        comments: str | None = None,
        with_tags: bool | None = False,
        track_conversion: bool | None = False,
        use_as_template: bool | None = None,
        has_password: bool | None = None,
        has_expiration: bool | None = None,
        has_utm: bool | None = None,
        has_custom_social: bool | None = None,
        has_geo: bool | None = None,
        has_device: bool | None = None,
        has_comments: bool | None = None,
        has_tags: bool | None = None,
        created_after: RFC3339DateTime | None = None,
        created_before: RFC3339DateTime | None = None,
        expires_after: RFC3339DateTime | None = None,
        expires_before: RFC3339DateTime | None = None,
        clicks_min: int | None = None,
        clicks_max: int | None = None,
        utm_source: str | None = None,
        utm_medium: str | None = None,
        utm_campaign: str | None = None,
        utm_content: str | None = None,
        utm_term: str | None = None,
        sort: SortOrStr | None = Sort.CREATED_AT,
        link_ids: LinkIds | LinkIdsDict | None = None,
        page: float | None = 1.0,
        page_size: float | None = 100.0,
        request_options: RequestOptionsOrDict | None = None,
    ) -> list[LinkCodeqrIoLinksApi]:
        """Retrieve a paginated list of links for the authenticated workspace.

        Args:
            project_slug: The slug of the project to which the link belongs. For example, for ``app.codeqr.io/acme``,
                the projectSlug is ``acme``.
            domain: The domain to filter the links. For example, ``ac.me``. If not provided, all links of the project
                will be returned.
            tag_id: [OBSOLETO (use tagIds em vez disso)]: The unique ID of the tag assigned to the short link.
            tag_ids: The IDs of the tags to filter the links.
            tag_names: The unique name of the tags assigned to the short link (case insensitive).
            folder_id: The folder ID to filter the links by.
            search: The search term to filter the links. The search term will be matched against the short link slug and
                the destination URL.
            user_id: The ID of the user to filter by.
            show_archived: If should include archived links in the response. The default is ``false`` if not provided.
            password: The password to filter by.
            expires_at: Value sent with the request.
            geo: Geographic segmentation information for the short link in JSON format ``{[COUNTRY]: https://example.com
                }``.
            ios: The iOS device to filter by.
            android: The Android device to filter by.
            comments: The comments to filter by.
            with_tags: If should include tags in the response. The default is ``false`` if not provided.
            track_conversion: If should include links with conversion tracking enabled. The default is ``false`` if not
                provided.
            use_as_template: Filter links marked as templates.
            has_password: Filter links that have password protection (any password)
            has_expiration: Filter links that have expiration date (any expiration)
            has_utm: Filter links that have UTM parameters
            has_custom_social: Filter links that have custom social media cards
            has_geo: Filter links that have geo-targeting
            has_device: Filter links that have device targeting
            has_comments: Filter links that have comments (any comments)
            has_tags: Filter links that have tags (any tags)
            created_after: Created after date (ISO string)
            created_before: Created before date (ISO string)
            expires_after: Expires after date (ISO string)
            expires_before: Expires before date (ISO string)
            clicks_min: Minimum number of clicks
            clicks_max: Maximum number of clicks
            utm_source: Filter by UTM source value
            utm_medium: Filter by UTM medium value
            utm_campaign: Filter by UTM campaign value
            utm_content: Filter by UTM content value
            utm_term: Filter by UTM term value
            sort: The field to sort the links by. The default is ``createdAt``, and sort order is always descending.
            link_ids: Link IDs to filter by.
            page: The page number for pagination.
            page_size: The number of items per page.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A list of links

        Raises:
            ApiError: The server cannot or will not process the request due to something that is perceived to be a
                client error (e.g., malformed request syntax, invalid request message framing, or deceptive request
                routing). Although the HTTP standard specifies "unauthorized", semantically this response means
                "unauthenticated". That is, the client must authenticate itself to get the requested response. The
                client does not have access rights to the content; that is, it is unauthorized, so the server is
                refusing to give the requested resource. Unlike 401 Unauthorized, the client's identity is known to the
                server. The server cannot find the requested resource. This response is sent when a request conflicts
                with the current state of the server. This response is sent when the requested content has been
                permanently deleted from server, with no forwarding address. The request was well-formed but was unable
                to be followed due to semantic errors. The user has sent too many requests in a given amount of time
                ("rate limiting") The server has encountered a situation it does not know how to handle. ``error`` is
                ``M4001 | RawError``."""
        return unwrap(
            self._with_raw_response.get_links(
                project_slug=project_slug,
                domain=domain,
                tag_id=tag_id,
                tag_ids=tag_ids,
                tag_names=tag_names,
                folder_id=folder_id,
                search=search,
                user_id=user_id,
                show_archived=show_archived,
                password=password,
                expires_at=expires_at,
                geo=geo,
                ios=ios,
                android=android,
                comments=comments,
                with_tags=with_tags,
                track_conversion=track_conversion,
                use_as_template=use_as_template,
                has_password=has_password,
                has_expiration=has_expiration,
                has_utm=has_utm,
                has_custom_social=has_custom_social,
                has_geo=has_geo,
                has_device=has_device,
                has_comments=has_comments,
                has_tags=has_tags,
                created_after=created_after,
                created_before=created_before,
                expires_after=expires_after,
                expires_before=expires_before,
                clicks_min=clicks_min,
                clicks_max=clicks_max,
                utm_source=utm_source,
                utm_medium=utm_medium,
                utm_campaign=utm_campaign,
                utm_content=utm_content,
                utm_term=utm_term,
                sort=sort,
                link_ids=link_ids,
                page=page,
                page_size=page_size,
                request_options=request_options,
            ),
        )

    def get_links_count(
        self,
        *,
        project_slug: str | None = None,
        domain: str | None = None,
        tag_id: str | None = None,
        tag_ids: TagIdsModel | TagIdsModelDict | None = None,
        tag_names: TagNames | TagNamesDict | None = None,
        folder_id: str | None = None,
        search: str | None = None,
        user_id: str | None = None,
        show_archived: bool | None = False,
        password: str | None = None,
        expires_at: RFC3339DateTime | None = None,
        geo: Geo1 | Geo1Dict | None = None,
        ios: str | None = None,
        android: str | None = None,
        comments: str | None = None,
        with_tags: bool | None = False,
        track_conversion: bool | None = False,
        use_as_template: bool | None = None,
        has_password: bool | None = None,
        has_expiration: bool | None = None,
        has_utm: bool | None = None,
        has_custom_social: bool | None = None,
        has_geo: bool | None = None,
        has_device: bool | None = None,
        has_comments: bool | None = None,
        has_tags: bool | None = None,
        created_after: RFC3339DateTime | None = None,
        created_before: RFC3339DateTime | None = None,
        expires_after: RFC3339DateTime | None = None,
        expires_before: RFC3339DateTime | None = None,
        clicks_min: int | None = None,
        clicks_max: int | None = None,
        utm_source: str | None = None,
        utm_medium: str | None = None,
        utm_campaign: str | None = None,
        utm_content: str | None = None,
        utm_term: str | None = None,
        group_by: GroupBy4 | GroupBy4Dict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> float:
        """Retrieve the number of links for the authenticated workspace.

        Args:
            project_slug: The slug of the project to which the link belongs. For example, for ``app.codeqr.io/acme``,
                the projectSlug is ``acme``.
            domain: The domain to filter the links. For example, ``ac.me``. If not provided, all links of the project
                will be returned.
            tag_id: [OBSOLETO (use tagIds em vez disso)]: The unique ID of the tag assigned to the short link.
            tag_ids: The IDs of the tags to filter the links.
            tag_names: The unique name of the tags assigned to the short link (case insensitive).
            folder_id: The folder ID to filter the links by.
            search: The search term to filter the links. The search term will be matched against the short link slug and
                the destination URL.
            user_id: The ID of the user to filter by.
            show_archived: If should include archived links in the response. The default is ``false`` if not provided.
            password: The password to filter by.
            expires_at: Value sent with the request.
            geo: Geographic segmentation information for the short link in JSON format ``{[COUNTRY]: https://example.com
                }``.
            ios: The iOS device to filter by.
            android: The Android device to filter by.
            comments: The comments to filter by.
            with_tags: If should include tags in the response. The default is ``false`` if not provided.
            track_conversion: If should include links with conversion tracking enabled. The default is ``false`` if not
                provided.
            use_as_template: Filter links marked as templates.
            has_password: Filter links that have password protection (any password)
            has_expiration: Filter links that have expiration date (any expiration)
            has_utm: Filter links that have UTM parameters
            has_custom_social: Filter links that have custom social media cards
            has_geo: Filter links that have geo-targeting
            has_device: Filter links that have device targeting
            has_comments: Filter links that have comments (any comments)
            has_tags: Filter links that have tags (any tags)
            created_after: Created after date (ISO string)
            created_before: Created before date (ISO string)
            expires_after: Expires after date (ISO string)
            expires_before: Expires before date (ISO string)
            clicks_min: Minimum number of clicks
            clicks_max: Maximum number of clicks
            utm_source: Filter by UTM source value
            utm_medium: Filter by UTM medium value
            utm_campaign: Filter by UTM campaign value
            utm_content: Filter by UTM content value
            utm_term: Filter by UTM term value
            group_by: The field to group the links by.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A list of links

        Raises:
            ApiError: The server cannot or will not process the request due to something that is perceived to be a
                client error (e.g., malformed request syntax, invalid request message framing, or deceptive request
                routing). Although the HTTP standard specifies "unauthorized", semantically this response means
                "unauthenticated". That is, the client must authenticate itself to get the requested response. The
                client does not have access rights to the content; that is, it is unauthorized, so the server is
                refusing to give the requested resource. Unlike 401 Unauthorized, the client's identity is known to the
                server. The server cannot find the requested resource. This response is sent when a request conflicts
                with the current state of the server. This response is sent when the requested content has been
                permanently deleted from server, with no forwarding address. The request was well-formed but was unable
                to be followed due to semantic errors. The user has sent too many requests in a given amount of time
                ("rate limiting") The server has encountered a situation it does not know how to handle. ``error`` is
                ``M4001 | RawError``."""
        return unwrap(
            self._with_raw_response.get_links_count(
                project_slug=project_slug,
                domain=domain,
                tag_id=tag_id,
                tag_ids=tag_ids,
                tag_names=tag_names,
                folder_id=folder_id,
                search=search,
                user_id=user_id,
                show_archived=show_archived,
                password=password,
                expires_at=expires_at,
                geo=geo,
                ios=ios,
                android=android,
                comments=comments,
                with_tags=with_tags,
                track_conversion=track_conversion,
                use_as_template=use_as_template,
                has_password=has_password,
                has_expiration=has_expiration,
                has_utm=has_utm,
                has_custom_social=has_custom_social,
                has_geo=has_geo,
                has_device=has_device,
                has_comments=has_comments,
                has_tags=has_tags,
                created_after=created_after,
                created_before=created_before,
                expires_after=expires_after,
                expires_before=expires_before,
                clicks_min=clicks_min,
                clicks_max=clicks_max,
                utm_source=utm_source,
                utm_medium=utm_medium,
                utm_campaign=utm_campaign,
                utm_content=utm_content,
                utm_term=utm_term,
                group_by=group_by,
                request_options=request_options,
            ),
        )

    def update_link(
        self,
        link_id: str,
        *,
        body: LinksRequest1 | LinksRequest1Dict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> LinkCodeqrIoLinksApi:
        """Update a link for the authenticated workspace. If there's no change, returns it as it is.

        Args:
            link_id: The id of the link to update. You may use either ``linkId`` (obtained via ``/links/info`` endpoint)
                or ``externalId`` prefixed with ``ext_``.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The updated link

        Raises:
            ApiError: The server cannot or will not process the request due to something that is perceived to be a
                client error (e.g., malformed request syntax, invalid request message framing, or deceptive request
                routing). Although the HTTP standard specifies "unauthorized", semantically this response means
                "unauthenticated". That is, the client must authenticate itself to get the requested response. The
                client does not have access rights to the content; that is, it is unauthorized, so the server is
                refusing to give the requested resource. Unlike 401 Unauthorized, the client's identity is known to the
                server. The server cannot find the requested resource. This response is sent when a request conflicts
                with the current state of the server. This response is sent when the requested content has been
                permanently deleted from server, with no forwarding address. The request was well-formed but was unable
                to be followed due to semantic errors. The user has sent too many requests in a given amount of time
                ("rate limiting") The server has encountered a situation it does not know how to handle. ``error`` is
                ``M4001 | RawError``."""
        return unwrap(self._with_raw_response.update_link(link_id, body=body, request_options=request_options))

    @property
    def with_raw_response(self) -> LinksWithRawResponse:
        return self._with_raw_response


class AsyncLinks:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncLinksWithRawResponse(client, server, auth)

    async def bulk_create_links(
        self,
        *,
        body: list[LinksBulkRequest | LinksBulkRequestDict] | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> list[LinksBulkResponse1]:
        """Bulk create up to 100 links for the authenticated workspace.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The created links

        Raises:
            ApiError: The server cannot or will not process the request due to something that is perceived to be a
                client error (e.g., malformed request syntax, invalid request message framing, or deceptive request
                routing). Although the HTTP standard specifies "unauthorized", semantically this response means
                "unauthenticated". That is, the client must authenticate itself to get the requested response. The
                client does not have access rights to the content; that is, it is unauthorized, so the server is
                refusing to give the requested resource. Unlike 401 Unauthorized, the client's identity is known to the
                server. The server cannot find the requested resource. This response is sent when a request conflicts
                with the current state of the server. This response is sent when the requested content has been
                permanently deleted from server, with no forwarding address. The request was well-formed but was unable
                to be followed due to semantic errors. The user has sent too many requests in a given amount of time
                ("rate limiting") The server has encountered a situation it does not know how to handle. ``error`` is
                ``M4001 | RawError``."""
        return unwrap(await self._with_raw_response.bulk_create_links(body=body, request_options=request_options))

    async def bulk_delete_links(
        self, link_ids: list[str], *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> LinksBulkResponse:
        """Bulk delete up to 100 links for the authenticated workspace.

        Args:
            link_ids: Comma-separated list of link IDs to delete. Maximum of 100 IDs. Non-existing IDs will be ignored.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The deleted links count.

        Raises:
            ApiError: The server cannot or will not process the request due to something that is perceived to be a
                client error (e.g., malformed request syntax, invalid request message framing, or deceptive request
                routing). Although the HTTP standard specifies "unauthorized", semantically this response means
                "unauthenticated". That is, the client must authenticate itself to get the requested response. The
                client does not have access rights to the content; that is, it is unauthorized, so the server is
                refusing to give the requested resource. Unlike 401 Unauthorized, the client's identity is known to the
                server. The server cannot find the requested resource. This response is sent when a request conflicts
                with the current state of the server. This response is sent when the requested content has been
                permanently deleted from server, with no forwarding address. The request was well-formed but was unable
                to be followed due to semantic errors. The user has sent too many requests in a given amount of time
                ("rate limiting") The server has encountered a situation it does not know how to handle. ``error`` is
                ``M4001 | RawError``."""
        return unwrap(await self._with_raw_response.bulk_delete_links(link_ids, request_options=request_options))

    async def create_link(
        self,
        *,
        body: LinksRequest | LinksRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> LinkCodeqrIoLinksApi:
        """Create a new link for the authenticated workspace.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The created link

        Raises:
            ApiError: The server cannot or will not process the request due to something that is perceived to be a
                client error (e.g., malformed request syntax, invalid request message framing, or deceptive request
                routing). Although the HTTP standard specifies "unauthorized", semantically this response means
                "unauthenticated". That is, the client must authenticate itself to get the requested response. The
                client does not have access rights to the content; that is, it is unauthorized, so the server is
                refusing to give the requested resource. Unlike 401 Unauthorized, the client's identity is known to the
                server. The server cannot find the requested resource. This response is sent when a request conflicts
                with the current state of the server. This response is sent when the requested content has been
                permanently deleted from server, with no forwarding address. The request was well-formed but was unable
                to be followed due to semantic errors. The user has sent too many requests in a given amount of time
                ("rate limiting") The server has encountered a situation it does not know how to handle. ``error`` is
                ``M4001 | RawError``."""
        return unwrap(await self._with_raw_response.create_link(body=body, request_options=request_options))

    async def delete_link(
        self, link_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> LinksResponse:
        """Delete a link for the authenticated workspace.

        Args:
            link_id: The id of the link to delete. You may use either ``linkId`` (obtained via ``/links/info`` endpoint)
                or ``externalId`` prefixed with ``ext_``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The deleted link ID.

        Raises:
            ApiError: The server cannot or will not process the request due to something that is perceived to be a
                client error (e.g., malformed request syntax, invalid request message framing, or deceptive request
                routing). Although the HTTP standard specifies "unauthorized", semantically this response means
                "unauthenticated". That is, the client must authenticate itself to get the requested response. The
                client does not have access rights to the content; that is, it is unauthorized, so the server is
                refusing to give the requested resource. Unlike 401 Unauthorized, the client's identity is known to the
                server. The server cannot find the requested resource. This response is sent when a request conflicts
                with the current state of the server. This response is sent when the requested content has been
                permanently deleted from server, with no forwarding address. The request was well-formed but was unable
                to be followed due to semantic errors. The user has sent too many requests in a given amount of time
                ("rate limiting") The server has encountered a situation it does not know how to handle. ``error`` is
                ``M4001 | RawError``."""
        return unwrap(await self._with_raw_response.delete_link(link_id, request_options=request_options))

    async def get_link_info(
        self,
        project_slug: str,
        domain: str,
        key: str,
        *,
        link_id: str | None = None,
        external_id: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> LinkCodeqrIoLinksApi:
        """Retrieve the info for a link.

        Args:
            project_slug: The slug of the project to which the link belongs. For example, for ``app.codeqr.io/acme``,
                the projectSlug is ``acme``.
            domain: Value sent with the request.
            key: The key of the link to be retrieved. For example, for ``codeqr.link/github``, the key is ``github``.
            link_id: The unique ID of the short link.
            external_id: This is the ID of the link in your database. Must be prefixed with ``ext_`` when passed as a
                query parameter.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The retrieved link

        Raises:
            ApiError: The server cannot or will not process the request due to something that is perceived to be a
                client error (e.g., malformed request syntax, invalid request message framing, or deceptive request
                routing). Although the HTTP standard specifies "unauthorized", semantically this response means
                "unauthenticated". That is, the client must authenticate itself to get the requested response. The
                client does not have access rights to the content; that is, it is unauthorized, so the server is
                refusing to give the requested resource. Unlike 401 Unauthorized, the client's identity is known to the
                server. The server cannot find the requested resource. This response is sent when a request conflicts
                with the current state of the server. This response is sent when the requested content has been
                permanently deleted from server, with no forwarding address. The request was well-formed but was unable
                to be followed due to semantic errors. The user has sent too many requests in a given amount of time
                ("rate limiting") The server has encountered a situation it does not know how to handle. ``error`` is
                ``M4001 | RawError``."""
        return unwrap(
            await self._with_raw_response.get_link_info(
                project_slug, domain, key, link_id=link_id, external_id=external_id, request_options=request_options
            ),
        )

    async def get_links(
        self,
        *,
        project_slug: str | None = None,
        domain: str | None = None,
        tag_id: str | None = None,
        tag_ids: TagIdsModel | TagIdsModelDict | None = None,
        tag_names: TagNames | TagNamesDict | None = None,
        folder_id: str | None = None,
        search: str | None = None,
        user_id: str | None = None,
        show_archived: bool | None = False,
        password: str | None = None,
        expires_at: RFC3339DateTime | None = None,
        geo: Geo1 | Geo1Dict | None = None,
        ios: str | None = None,
        android: str | None = None,
        comments: str | None = None,
        with_tags: bool | None = False,
        track_conversion: bool | None = False,
        use_as_template: bool | None = None,
        has_password: bool | None = None,
        has_expiration: bool | None = None,
        has_utm: bool | None = None,
        has_custom_social: bool | None = None,
        has_geo: bool | None = None,
        has_device: bool | None = None,
        has_comments: bool | None = None,
        has_tags: bool | None = None,
        created_after: RFC3339DateTime | None = None,
        created_before: RFC3339DateTime | None = None,
        expires_after: RFC3339DateTime | None = None,
        expires_before: RFC3339DateTime | None = None,
        clicks_min: int | None = None,
        clicks_max: int | None = None,
        utm_source: str | None = None,
        utm_medium: str | None = None,
        utm_campaign: str | None = None,
        utm_content: str | None = None,
        utm_term: str | None = None,
        sort: SortOrStr | None = Sort.CREATED_AT,
        link_ids: LinkIds | LinkIdsDict | None = None,
        page: float | None = 1.0,
        page_size: float | None = 100.0,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> list[LinkCodeqrIoLinksApi]:
        """Retrieve a paginated list of links for the authenticated workspace.

        Args:
            project_slug: The slug of the project to which the link belongs. For example, for ``app.codeqr.io/acme``,
                the projectSlug is ``acme``.
            domain: The domain to filter the links. For example, ``ac.me``. If not provided, all links of the project
                will be returned.
            tag_id: [OBSOLETO (use tagIds em vez disso)]: The unique ID of the tag assigned to the short link.
            tag_ids: The IDs of the tags to filter the links.
            tag_names: The unique name of the tags assigned to the short link (case insensitive).
            folder_id: The folder ID to filter the links by.
            search: The search term to filter the links. The search term will be matched against the short link slug and
                the destination URL.
            user_id: The ID of the user to filter by.
            show_archived: If should include archived links in the response. The default is ``false`` if not provided.
            password: The password to filter by.
            expires_at: Value sent with the request.
            geo: Geographic segmentation information for the short link in JSON format ``{[COUNTRY]: https://example.com
                }``.
            ios: The iOS device to filter by.
            android: The Android device to filter by.
            comments: The comments to filter by.
            with_tags: If should include tags in the response. The default is ``false`` if not provided.
            track_conversion: If should include links with conversion tracking enabled. The default is ``false`` if not
                provided.
            use_as_template: Filter links marked as templates.
            has_password: Filter links that have password protection (any password)
            has_expiration: Filter links that have expiration date (any expiration)
            has_utm: Filter links that have UTM parameters
            has_custom_social: Filter links that have custom social media cards
            has_geo: Filter links that have geo-targeting
            has_device: Filter links that have device targeting
            has_comments: Filter links that have comments (any comments)
            has_tags: Filter links that have tags (any tags)
            created_after: Created after date (ISO string)
            created_before: Created before date (ISO string)
            expires_after: Expires after date (ISO string)
            expires_before: Expires before date (ISO string)
            clicks_min: Minimum number of clicks
            clicks_max: Maximum number of clicks
            utm_source: Filter by UTM source value
            utm_medium: Filter by UTM medium value
            utm_campaign: Filter by UTM campaign value
            utm_content: Filter by UTM content value
            utm_term: Filter by UTM term value
            sort: The field to sort the links by. The default is ``createdAt``, and sort order is always descending.
            link_ids: Link IDs to filter by.
            page: The page number for pagination.
            page_size: The number of items per page.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A list of links

        Raises:
            ApiError: The server cannot or will not process the request due to something that is perceived to be a
                client error (e.g., malformed request syntax, invalid request message framing, or deceptive request
                routing). Although the HTTP standard specifies "unauthorized", semantically this response means
                "unauthenticated". That is, the client must authenticate itself to get the requested response. The
                client does not have access rights to the content; that is, it is unauthorized, so the server is
                refusing to give the requested resource. Unlike 401 Unauthorized, the client's identity is known to the
                server. The server cannot find the requested resource. This response is sent when a request conflicts
                with the current state of the server. This response is sent when the requested content has been
                permanently deleted from server, with no forwarding address. The request was well-formed but was unable
                to be followed due to semantic errors. The user has sent too many requests in a given amount of time
                ("rate limiting") The server has encountered a situation it does not know how to handle. ``error`` is
                ``M4001 | RawError``."""
        return unwrap(
            await self._with_raw_response.get_links(
                project_slug=project_slug,
                domain=domain,
                tag_id=tag_id,
                tag_ids=tag_ids,
                tag_names=tag_names,
                folder_id=folder_id,
                search=search,
                user_id=user_id,
                show_archived=show_archived,
                password=password,
                expires_at=expires_at,
                geo=geo,
                ios=ios,
                android=android,
                comments=comments,
                with_tags=with_tags,
                track_conversion=track_conversion,
                use_as_template=use_as_template,
                has_password=has_password,
                has_expiration=has_expiration,
                has_utm=has_utm,
                has_custom_social=has_custom_social,
                has_geo=has_geo,
                has_device=has_device,
                has_comments=has_comments,
                has_tags=has_tags,
                created_after=created_after,
                created_before=created_before,
                expires_after=expires_after,
                expires_before=expires_before,
                clicks_min=clicks_min,
                clicks_max=clicks_max,
                utm_source=utm_source,
                utm_medium=utm_medium,
                utm_campaign=utm_campaign,
                utm_content=utm_content,
                utm_term=utm_term,
                sort=sort,
                link_ids=link_ids,
                page=page,
                page_size=page_size,
                request_options=request_options,
            ),
        )

    async def get_links_count(
        self,
        *,
        project_slug: str | None = None,
        domain: str | None = None,
        tag_id: str | None = None,
        tag_ids: TagIdsModel | TagIdsModelDict | None = None,
        tag_names: TagNames | TagNamesDict | None = None,
        folder_id: str | None = None,
        search: str | None = None,
        user_id: str | None = None,
        show_archived: bool | None = False,
        password: str | None = None,
        expires_at: RFC3339DateTime | None = None,
        geo: Geo1 | Geo1Dict | None = None,
        ios: str | None = None,
        android: str | None = None,
        comments: str | None = None,
        with_tags: bool | None = False,
        track_conversion: bool | None = False,
        use_as_template: bool | None = None,
        has_password: bool | None = None,
        has_expiration: bool | None = None,
        has_utm: bool | None = None,
        has_custom_social: bool | None = None,
        has_geo: bool | None = None,
        has_device: bool | None = None,
        has_comments: bool | None = None,
        has_tags: bool | None = None,
        created_after: RFC3339DateTime | None = None,
        created_before: RFC3339DateTime | None = None,
        expires_after: RFC3339DateTime | None = None,
        expires_before: RFC3339DateTime | None = None,
        clicks_min: int | None = None,
        clicks_max: int | None = None,
        utm_source: str | None = None,
        utm_medium: str | None = None,
        utm_campaign: str | None = None,
        utm_content: str | None = None,
        utm_term: str | None = None,
        group_by: GroupBy4 | GroupBy4Dict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> float:
        """Retrieve the number of links for the authenticated workspace.

        Args:
            project_slug: The slug of the project to which the link belongs. For example, for ``app.codeqr.io/acme``,
                the projectSlug is ``acme``.
            domain: The domain to filter the links. For example, ``ac.me``. If not provided, all links of the project
                will be returned.
            tag_id: [OBSOLETO (use tagIds em vez disso)]: The unique ID of the tag assigned to the short link.
            tag_ids: The IDs of the tags to filter the links.
            tag_names: The unique name of the tags assigned to the short link (case insensitive).
            folder_id: The folder ID to filter the links by.
            search: The search term to filter the links. The search term will be matched against the short link slug and
                the destination URL.
            user_id: The ID of the user to filter by.
            show_archived: If should include archived links in the response. The default is ``false`` if not provided.
            password: The password to filter by.
            expires_at: Value sent with the request.
            geo: Geographic segmentation information for the short link in JSON format ``{[COUNTRY]: https://example.com
                }``.
            ios: The iOS device to filter by.
            android: The Android device to filter by.
            comments: The comments to filter by.
            with_tags: If should include tags in the response. The default is ``false`` if not provided.
            track_conversion: If should include links with conversion tracking enabled. The default is ``false`` if not
                provided.
            use_as_template: Filter links marked as templates.
            has_password: Filter links that have password protection (any password)
            has_expiration: Filter links that have expiration date (any expiration)
            has_utm: Filter links that have UTM parameters
            has_custom_social: Filter links that have custom social media cards
            has_geo: Filter links that have geo-targeting
            has_device: Filter links that have device targeting
            has_comments: Filter links that have comments (any comments)
            has_tags: Filter links that have tags (any tags)
            created_after: Created after date (ISO string)
            created_before: Created before date (ISO string)
            expires_after: Expires after date (ISO string)
            expires_before: Expires before date (ISO string)
            clicks_min: Minimum number of clicks
            clicks_max: Maximum number of clicks
            utm_source: Filter by UTM source value
            utm_medium: Filter by UTM medium value
            utm_campaign: Filter by UTM campaign value
            utm_content: Filter by UTM content value
            utm_term: Filter by UTM term value
            group_by: The field to group the links by.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A list of links

        Raises:
            ApiError: The server cannot or will not process the request due to something that is perceived to be a
                client error (e.g., malformed request syntax, invalid request message framing, or deceptive request
                routing). Although the HTTP standard specifies "unauthorized", semantically this response means
                "unauthenticated". That is, the client must authenticate itself to get the requested response. The
                client does not have access rights to the content; that is, it is unauthorized, so the server is
                refusing to give the requested resource. Unlike 401 Unauthorized, the client's identity is known to the
                server. The server cannot find the requested resource. This response is sent when a request conflicts
                with the current state of the server. This response is sent when the requested content has been
                permanently deleted from server, with no forwarding address. The request was well-formed but was unable
                to be followed due to semantic errors. The user has sent too many requests in a given amount of time
                ("rate limiting") The server has encountered a situation it does not know how to handle. ``error`` is
                ``M4001 | RawError``."""
        return unwrap(
            await self._with_raw_response.get_links_count(
                project_slug=project_slug,
                domain=domain,
                tag_id=tag_id,
                tag_ids=tag_ids,
                tag_names=tag_names,
                folder_id=folder_id,
                search=search,
                user_id=user_id,
                show_archived=show_archived,
                password=password,
                expires_at=expires_at,
                geo=geo,
                ios=ios,
                android=android,
                comments=comments,
                with_tags=with_tags,
                track_conversion=track_conversion,
                use_as_template=use_as_template,
                has_password=has_password,
                has_expiration=has_expiration,
                has_utm=has_utm,
                has_custom_social=has_custom_social,
                has_geo=has_geo,
                has_device=has_device,
                has_comments=has_comments,
                has_tags=has_tags,
                created_after=created_after,
                created_before=created_before,
                expires_after=expires_after,
                expires_before=expires_before,
                clicks_min=clicks_min,
                clicks_max=clicks_max,
                utm_source=utm_source,
                utm_medium=utm_medium,
                utm_campaign=utm_campaign,
                utm_content=utm_content,
                utm_term=utm_term,
                group_by=group_by,
                request_options=request_options,
            ),
        )

    async def update_link(
        self,
        link_id: str,
        *,
        body: LinksRequest1 | LinksRequest1Dict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> LinkCodeqrIoLinksApi:
        """Update a link for the authenticated workspace. If there's no change, returns it as it is.

        Args:
            link_id: The id of the link to update. You may use either ``linkId`` (obtained via ``/links/info`` endpoint)
                or ``externalId`` prefixed with ``ext_``.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The updated link

        Raises:
            ApiError: The server cannot or will not process the request due to something that is perceived to be a
                client error (e.g., malformed request syntax, invalid request message framing, or deceptive request
                routing). Although the HTTP standard specifies "unauthorized", semantically this response means
                "unauthenticated". That is, the client must authenticate itself to get the requested response. The
                client does not have access rights to the content; that is, it is unauthorized, so the server is
                refusing to give the requested resource. Unlike 401 Unauthorized, the client's identity is known to the
                server. The server cannot find the requested resource. This response is sent when a request conflicts
                with the current state of the server. This response is sent when the requested content has been
                permanently deleted from server, with no forwarding address. The request was well-formed but was unable
                to be followed due to semantic errors. The user has sent too many requests in a given amount of time
                ("rate limiting") The server has encountered a situation it does not know how to handle. ``error`` is
                ``M4001 | RawError``."""
        return unwrap(await self._with_raw_response.update_link(link_id, body=body, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncLinksWithRawResponse:
        return self._with_raw_response


class LinksWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def bulk_create_links(
        self,
        *,
        body: list[LinksBulkRequest | LinksBulkRequestDict] | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[list[LinksBulkResponse1], BulkCreateLinksErrorBody]:
        """Bulk create up to 100 links for the authenticated workspace.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/links/bulk"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[list[LinksBulkRequest | LinksBulkRequestDict] | None](body),
            auth_scheme=self._auth.token,
            decoder=json_decoder[list[LinksBulkResponse1]],
            error_mapper=bulk_create_links_error_mapper,
            request_options=request_options,
        )

    def bulk_delete_links(
        self, link_ids: list[str], *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[LinksBulkResponse, BulkDeleteLinksErrorBody]:
        """Bulk delete up to 100 links for the authenticated workspace.

        Args:
            link_ids: Comma-separated list of link IDs to delete. Maximum of 100 IDs. Non-existing IDs will be ignored.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/links/bulk"),
            query_params=[param[list[str]]("linkIds", link_ids)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.token,
            decoder=json_decoder[LinksBulkResponse],
            error_mapper=bulk_delete_links_error_mapper,
            request_options=request_options,
        )

    def create_link(
        self,
        *,
        body: LinksRequest | LinksRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[LinkCodeqrIoLinksApi, CreateLinkErrorBody]:
        """Create a new link for the authenticated workspace.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/links"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[LinksRequest | LinksRequestDict | None](body),
            auth_scheme=self._auth.token,
            decoder=json_decoder[LinkCodeqrIoLinksApi],
            error_mapper=create_link_error_mapper,
            request_options=request_options,
        )

    def delete_link(
        self, link_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[LinksResponse, DeleteLinkErrorBody]:
        """Delete a link for the authenticated workspace.

        Args:
            link_id: The id of the link to delete. You may use either ``linkId`` (obtained via ``/links/info`` endpoint)
                or ``externalId`` prefixed with ``ext_``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/links/{linkId}"),
            path_params=[param[str]("linkId", link_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.token,
            decoder=json_decoder[LinksResponse],
            error_mapper=delete_link_error_mapper,
            request_options=request_options,
        )

    def get_link_info(
        self,
        project_slug: str,
        domain: str,
        key: str,
        *,
        link_id: str | None = None,
        external_id: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[LinkCodeqrIoLinksApi, GetLinkInfoErrorBody]:
        """Retrieve the info for a link.

        Args:
            project_slug: The slug of the project to which the link belongs. For example, for ``app.codeqr.io/acme``,
                the projectSlug is ``acme``.
            domain: Value sent with the request.
            key: The key of the link to be retrieved. For example, for ``codeqr.link/github``, the key is ``github``.
            link_id: The unique ID of the short link.
            external_id: This is the ID of the link in your database. Must be prefixed with ``ext_`` when passed as a
                query parameter.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/links/info"),
            query_params=[
                param[str]("projectSlug", project_slug),
                param[str]("domain", domain),
                param[str]("key", key),
                param[str | None]("linkId", link_id),
                param[str | None]("externalId", external_id),
            ],
            auth_scheme=self._auth.token,
            decoder=json_decoder[LinkCodeqrIoLinksApi],
            error_mapper=get_link_info_error_mapper,
            request_options=request_options,
        )

    def get_links(
        self,
        *,
        project_slug: str | None = None,
        domain: str | None = None,
        tag_id: str | None = None,
        tag_ids: TagIdsModel | TagIdsModelDict | None = None,
        tag_names: TagNames | TagNamesDict | None = None,
        folder_id: str | None = None,
        search: str | None = None,
        user_id: str | None = None,
        show_archived: bool | None = False,
        password: str | None = None,
        expires_at: RFC3339DateTime | None = None,
        geo: Geo1 | Geo1Dict | None = None,
        ios: str | None = None,
        android: str | None = None,
        comments: str | None = None,
        with_tags: bool | None = False,
        track_conversion: bool | None = False,
        use_as_template: bool | None = None,
        has_password: bool | None = None,
        has_expiration: bool | None = None,
        has_utm: bool | None = None,
        has_custom_social: bool | None = None,
        has_geo: bool | None = None,
        has_device: bool | None = None,
        has_comments: bool | None = None,
        has_tags: bool | None = None,
        created_after: RFC3339DateTime | None = None,
        created_before: RFC3339DateTime | None = None,
        expires_after: RFC3339DateTime | None = None,
        expires_before: RFC3339DateTime | None = None,
        clicks_min: int | None = None,
        clicks_max: int | None = None,
        utm_source: str | None = None,
        utm_medium: str | None = None,
        utm_campaign: str | None = None,
        utm_content: str | None = None,
        utm_term: str | None = None,
        sort: SortOrStr | None = Sort.CREATED_AT,
        link_ids: LinkIds | LinkIdsDict | None = None,
        page: float | None = 1.0,
        page_size: float | None = 100.0,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[list[LinkCodeqrIoLinksApi], GetLinksErrorBody]:
        """Retrieve a paginated list of links for the authenticated workspace.

        Args:
            project_slug: The slug of the project to which the link belongs. For example, for ``app.codeqr.io/acme``,
                the projectSlug is ``acme``.
            domain: The domain to filter the links. For example, ``ac.me``. If not provided, all links of the project
                will be returned.
            tag_id: [OBSOLETO (use tagIds em vez disso)]: The unique ID of the tag assigned to the short link.
            tag_ids: The IDs of the tags to filter the links.
            tag_names: The unique name of the tags assigned to the short link (case insensitive).
            folder_id: The folder ID to filter the links by.
            search: The search term to filter the links. The search term will be matched against the short link slug and
                the destination URL.
            user_id: The ID of the user to filter by.
            show_archived: If should include archived links in the response. The default is ``false`` if not provided.
            password: The password to filter by.
            expires_at: Value sent with the request.
            geo: Geographic segmentation information for the short link in JSON format ``{[COUNTRY]: https://example.com
                }``.
            ios: The iOS device to filter by.
            android: The Android device to filter by.
            comments: The comments to filter by.
            with_tags: If should include tags in the response. The default is ``false`` if not provided.
            track_conversion: If should include links with conversion tracking enabled. The default is ``false`` if not
                provided.
            use_as_template: Filter links marked as templates.
            has_password: Filter links that have password protection (any password)
            has_expiration: Filter links that have expiration date (any expiration)
            has_utm: Filter links that have UTM parameters
            has_custom_social: Filter links that have custom social media cards
            has_geo: Filter links that have geo-targeting
            has_device: Filter links that have device targeting
            has_comments: Filter links that have comments (any comments)
            has_tags: Filter links that have tags (any tags)
            created_after: Created after date (ISO string)
            created_before: Created before date (ISO string)
            expires_after: Expires after date (ISO string)
            expires_before: Expires before date (ISO string)
            clicks_min: Minimum number of clicks
            clicks_max: Maximum number of clicks
            utm_source: Filter by UTM source value
            utm_medium: Filter by UTM medium value
            utm_campaign: Filter by UTM campaign value
            utm_content: Filter by UTM content value
            utm_term: Filter by UTM term value
            sort: The field to sort the links by. The default is ``createdAt``, and sort order is always descending.
            link_ids: Link IDs to filter by.
            page: The page number for pagination.
            page_size: The number of items per page.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/links"),
            query_params=[
                param[str | None]("projectSlug", project_slug),
                param[str | None]("domain", domain),
                param[str | None]("tagId", tag_id),
                param[TagIdsModel | TagIdsModelDict | None]("tagIds", tag_ids),
                param[TagNames | TagNamesDict | None]("tagNames", tag_names),
                param[str | None]("folderId", folder_id),
                param[str | None]("search", search),
                param[str | None]("userId", user_id),
                param[bool | None]("showArchived", show_archived),
                param[str | None]("password", password),
                param[RFC3339DateTime | None]("expiresAt", expires_at),
                param[Geo1 | Geo1Dict | None]("geo", geo),
                param[str | None]("ios", ios),
                param[str | None]("android", android),
                param[str | None]("comments", comments),
                param[bool | None]("withTags", with_tags),
                param[bool | None]("trackConversion", track_conversion),
                param[bool | None]("useAsTemplate", use_as_template),
                param[bool | None]("hasPassword", has_password),
                param[bool | None]("hasExpiration", has_expiration),
                param[bool | None]("hasUTM", has_utm),
                param[bool | None]("hasCustomSocial", has_custom_social),
                param[bool | None]("hasGeo", has_geo),
                param[bool | None]("hasDevice", has_device),
                param[bool | None]("hasComments", has_comments),
                param[bool | None]("hasTags", has_tags),
                param[RFC3339DateTime | None]("createdAfter", created_after),
                param[RFC3339DateTime | None]("createdBefore", created_before),
                param[RFC3339DateTime | None]("expiresAfter", expires_after),
                param[RFC3339DateTime | None]("expiresBefore", expires_before),
                param[int | None]("clicksMin", clicks_min),
                param[int | None]("clicksMax", clicks_max),
                param[str | None]("utm_source", utm_source),
                param[str | None]("utm_medium", utm_medium),
                param[str | None]("utm_campaign", utm_campaign),
                param[str | None]("utm_content", utm_content),
                param[str | None]("utm_term", utm_term),
                param[SortOrStr | None]("sort", sort),
                param[LinkIds | LinkIdsDict | None]("linkIds", link_ids),
                param[float | None]("page", page),
                param[float | None]("pageSize", page_size),
            ],
            auth_scheme=self._auth.token,
            decoder=json_decoder[list[LinkCodeqrIoLinksApi]],
            error_mapper=get_links_error_mapper,
            request_options=request_options,
        )

    def get_links_count(
        self,
        *,
        project_slug: str | None = None,
        domain: str | None = None,
        tag_id: str | None = None,
        tag_ids: TagIdsModel | TagIdsModelDict | None = None,
        tag_names: TagNames | TagNamesDict | None = None,
        folder_id: str | None = None,
        search: str | None = None,
        user_id: str | None = None,
        show_archived: bool | None = False,
        password: str | None = None,
        expires_at: RFC3339DateTime | None = None,
        geo: Geo1 | Geo1Dict | None = None,
        ios: str | None = None,
        android: str | None = None,
        comments: str | None = None,
        with_tags: bool | None = False,
        track_conversion: bool | None = False,
        use_as_template: bool | None = None,
        has_password: bool | None = None,
        has_expiration: bool | None = None,
        has_utm: bool | None = None,
        has_custom_social: bool | None = None,
        has_geo: bool | None = None,
        has_device: bool | None = None,
        has_comments: bool | None = None,
        has_tags: bool | None = None,
        created_after: RFC3339DateTime | None = None,
        created_before: RFC3339DateTime | None = None,
        expires_after: RFC3339DateTime | None = None,
        expires_before: RFC3339DateTime | None = None,
        clicks_min: int | None = None,
        clicks_max: int | None = None,
        utm_source: str | None = None,
        utm_medium: str | None = None,
        utm_campaign: str | None = None,
        utm_content: str | None = None,
        utm_term: str | None = None,
        group_by: GroupBy4 | GroupBy4Dict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[float, GetLinksCountErrorBody]:
        """Retrieve the number of links for the authenticated workspace.

        Args:
            project_slug: The slug of the project to which the link belongs. For example, for ``app.codeqr.io/acme``,
                the projectSlug is ``acme``.
            domain: The domain to filter the links. For example, ``ac.me``. If not provided, all links of the project
                will be returned.
            tag_id: [OBSOLETO (use tagIds em vez disso)]: The unique ID of the tag assigned to the short link.
            tag_ids: The IDs of the tags to filter the links.
            tag_names: The unique name of the tags assigned to the short link (case insensitive).
            folder_id: The folder ID to filter the links by.
            search: The search term to filter the links. The search term will be matched against the short link slug and
                the destination URL.
            user_id: The ID of the user to filter by.
            show_archived: If should include archived links in the response. The default is ``false`` if not provided.
            password: The password to filter by.
            expires_at: Value sent with the request.
            geo: Geographic segmentation information for the short link in JSON format ``{[COUNTRY]: https://example.com
                }``.
            ios: The iOS device to filter by.
            android: The Android device to filter by.
            comments: The comments to filter by.
            with_tags: If should include tags in the response. The default is ``false`` if not provided.
            track_conversion: If should include links with conversion tracking enabled. The default is ``false`` if not
                provided.
            use_as_template: Filter links marked as templates.
            has_password: Filter links that have password protection (any password)
            has_expiration: Filter links that have expiration date (any expiration)
            has_utm: Filter links that have UTM parameters
            has_custom_social: Filter links that have custom social media cards
            has_geo: Filter links that have geo-targeting
            has_device: Filter links that have device targeting
            has_comments: Filter links that have comments (any comments)
            has_tags: Filter links that have tags (any tags)
            created_after: Created after date (ISO string)
            created_before: Created before date (ISO string)
            expires_after: Expires after date (ISO string)
            expires_before: Expires before date (ISO string)
            clicks_min: Minimum number of clicks
            clicks_max: Maximum number of clicks
            utm_source: Filter by UTM source value
            utm_medium: Filter by UTM medium value
            utm_campaign: Filter by UTM campaign value
            utm_content: Filter by UTM content value
            utm_term: Filter by UTM term value
            group_by: The field to group the links by.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/links/count"),
            query_params=[
                param[str | None]("projectSlug", project_slug),
                param[str | None]("domain", domain),
                param[str | None]("tagId", tag_id),
                param[TagIdsModel | TagIdsModelDict | None]("tagIds", tag_ids),
                param[TagNames | TagNamesDict | None]("tagNames", tag_names),
                param[str | None]("folderId", folder_id),
                param[str | None]("search", search),
                param[str | None]("userId", user_id),
                param[bool | None]("showArchived", show_archived),
                param[str | None]("password", password),
                param[RFC3339DateTime | None]("expiresAt", expires_at),
                param[Geo1 | Geo1Dict | None]("geo", geo),
                param[str | None]("ios", ios),
                param[str | None]("android", android),
                param[str | None]("comments", comments),
                param[bool | None]("withTags", with_tags),
                param[bool | None]("trackConversion", track_conversion),
                param[bool | None]("useAsTemplate", use_as_template),
                param[bool | None]("hasPassword", has_password),
                param[bool | None]("hasExpiration", has_expiration),
                param[bool | None]("hasUTM", has_utm),
                param[bool | None]("hasCustomSocial", has_custom_social),
                param[bool | None]("hasGeo", has_geo),
                param[bool | None]("hasDevice", has_device),
                param[bool | None]("hasComments", has_comments),
                param[bool | None]("hasTags", has_tags),
                param[RFC3339DateTime | None]("createdAfter", created_after),
                param[RFC3339DateTime | None]("createdBefore", created_before),
                param[RFC3339DateTime | None]("expiresAfter", expires_after),
                param[RFC3339DateTime | None]("expiresBefore", expires_before),
                param[int | None]("clicksMin", clicks_min),
                param[int | None]("clicksMax", clicks_max),
                param[str | None]("utm_source", utm_source),
                param[str | None]("utm_medium", utm_medium),
                param[str | None]("utm_campaign", utm_campaign),
                param[str | None]("utm_content", utm_content),
                param[str | None]("utm_term", utm_term),
                param[GroupBy4 | GroupBy4Dict | None]("groupBy", group_by),
            ],
            auth_scheme=self._auth.token,
            decoder=json_decoder[float],
            error_mapper=get_links_count_error_mapper,
            request_options=request_options,
        )

    def update_link(
        self,
        link_id: str,
        *,
        body: LinksRequest1 | LinksRequest1Dict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[LinkCodeqrIoLinksApi, UpdateLinkErrorBody]:
        """Update a link for the authenticated workspace. If there's no change, returns it as it is.

        Args:
            link_id: The id of the link to update. You may use either ``linkId`` (obtained via ``/links/info`` endpoint)
                or ``externalId`` prefixed with ``ext_``.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/links/{linkId}"),
            path_params=[param[str]("linkId", link_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[LinksRequest1 | LinksRequest1Dict | None](body),
            auth_scheme=self._auth.token,
            decoder=json_decoder[LinkCodeqrIoLinksApi],
            error_mapper=update_link_error_mapper,
            request_options=request_options,
        )


class AsyncLinksWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def bulk_create_links(
        self,
        *,
        body: list[LinksBulkRequest | LinksBulkRequestDict] | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[list[LinksBulkResponse1], BulkCreateLinksErrorBody]:
        """Bulk create up to 100 links for the authenticated workspace.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/links/bulk"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[list[LinksBulkRequest | LinksBulkRequestDict] | None](body),
            auth_scheme=self._auth.token,
            decoder=async_json_decoder[list[LinksBulkResponse1]],
            error_mapper=bulk_create_links_error_mapper,
            request_options=request_options,
        )

    async def bulk_delete_links(
        self, link_ids: list[str], *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[LinksBulkResponse, BulkDeleteLinksErrorBody]:
        """Bulk delete up to 100 links for the authenticated workspace.

        Args:
            link_ids: Comma-separated list of link IDs to delete. Maximum of 100 IDs. Non-existing IDs will be ignored.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/links/bulk"),
            query_params=[param[list[str]]("linkIds", link_ids)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.token,
            decoder=async_json_decoder[LinksBulkResponse],
            error_mapper=bulk_delete_links_error_mapper,
            request_options=request_options,
        )

    async def create_link(
        self,
        *,
        body: LinksRequest | LinksRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[LinkCodeqrIoLinksApi, CreateLinkErrorBody]:
        """Create a new link for the authenticated workspace.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/links"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[LinksRequest | LinksRequestDict | None](body),
            auth_scheme=self._auth.token,
            decoder=async_json_decoder[LinkCodeqrIoLinksApi],
            error_mapper=create_link_error_mapper,
            request_options=request_options,
        )

    async def delete_link(
        self, link_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[LinksResponse, DeleteLinkErrorBody]:
        """Delete a link for the authenticated workspace.

        Args:
            link_id: The id of the link to delete. You may use either ``linkId`` (obtained via ``/links/info`` endpoint)
                or ``externalId`` prefixed with ``ext_``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/links/{linkId}"),
            path_params=[param[str]("linkId", link_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.token,
            decoder=async_json_decoder[LinksResponse],
            error_mapper=delete_link_error_mapper,
            request_options=request_options,
        )

    async def get_link_info(
        self,
        project_slug: str,
        domain: str,
        key: str,
        *,
        link_id: str | None = None,
        external_id: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[LinkCodeqrIoLinksApi, GetLinkInfoErrorBody]:
        """Retrieve the info for a link.

        Args:
            project_slug: The slug of the project to which the link belongs. For example, for ``app.codeqr.io/acme``,
                the projectSlug is ``acme``.
            domain: Value sent with the request.
            key: The key of the link to be retrieved. For example, for ``codeqr.link/github``, the key is ``github``.
            link_id: The unique ID of the short link.
            external_id: This is the ID of the link in your database. Must be prefixed with ``ext_`` when passed as a
                query parameter.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/links/info"),
            query_params=[
                param[str]("projectSlug", project_slug),
                param[str]("domain", domain),
                param[str]("key", key),
                param[str | None]("linkId", link_id),
                param[str | None]("externalId", external_id),
            ],
            auth_scheme=self._auth.token,
            decoder=async_json_decoder[LinkCodeqrIoLinksApi],
            error_mapper=get_link_info_error_mapper,
            request_options=request_options,
        )

    async def get_links(
        self,
        *,
        project_slug: str | None = None,
        domain: str | None = None,
        tag_id: str | None = None,
        tag_ids: TagIdsModel | TagIdsModelDict | None = None,
        tag_names: TagNames | TagNamesDict | None = None,
        folder_id: str | None = None,
        search: str | None = None,
        user_id: str | None = None,
        show_archived: bool | None = False,
        password: str | None = None,
        expires_at: RFC3339DateTime | None = None,
        geo: Geo1 | Geo1Dict | None = None,
        ios: str | None = None,
        android: str | None = None,
        comments: str | None = None,
        with_tags: bool | None = False,
        track_conversion: bool | None = False,
        use_as_template: bool | None = None,
        has_password: bool | None = None,
        has_expiration: bool | None = None,
        has_utm: bool | None = None,
        has_custom_social: bool | None = None,
        has_geo: bool | None = None,
        has_device: bool | None = None,
        has_comments: bool | None = None,
        has_tags: bool | None = None,
        created_after: RFC3339DateTime | None = None,
        created_before: RFC3339DateTime | None = None,
        expires_after: RFC3339DateTime | None = None,
        expires_before: RFC3339DateTime | None = None,
        clicks_min: int | None = None,
        clicks_max: int | None = None,
        utm_source: str | None = None,
        utm_medium: str | None = None,
        utm_campaign: str | None = None,
        utm_content: str | None = None,
        utm_term: str | None = None,
        sort: SortOrStr | None = Sort.CREATED_AT,
        link_ids: LinkIds | LinkIdsDict | None = None,
        page: float | None = 1.0,
        page_size: float | None = 100.0,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[list[LinkCodeqrIoLinksApi], GetLinksErrorBody]:
        """Retrieve a paginated list of links for the authenticated workspace.

        Args:
            project_slug: The slug of the project to which the link belongs. For example, for ``app.codeqr.io/acme``,
                the projectSlug is ``acme``.
            domain: The domain to filter the links. For example, ``ac.me``. If not provided, all links of the project
                will be returned.
            tag_id: [OBSOLETO (use tagIds em vez disso)]: The unique ID of the tag assigned to the short link.
            tag_ids: The IDs of the tags to filter the links.
            tag_names: The unique name of the tags assigned to the short link (case insensitive).
            folder_id: The folder ID to filter the links by.
            search: The search term to filter the links. The search term will be matched against the short link slug and
                the destination URL.
            user_id: The ID of the user to filter by.
            show_archived: If should include archived links in the response. The default is ``false`` if not provided.
            password: The password to filter by.
            expires_at: Value sent with the request.
            geo: Geographic segmentation information for the short link in JSON format ``{[COUNTRY]: https://example.com
                }``.
            ios: The iOS device to filter by.
            android: The Android device to filter by.
            comments: The comments to filter by.
            with_tags: If should include tags in the response. The default is ``false`` if not provided.
            track_conversion: If should include links with conversion tracking enabled. The default is ``false`` if not
                provided.
            use_as_template: Filter links marked as templates.
            has_password: Filter links that have password protection (any password)
            has_expiration: Filter links that have expiration date (any expiration)
            has_utm: Filter links that have UTM parameters
            has_custom_social: Filter links that have custom social media cards
            has_geo: Filter links that have geo-targeting
            has_device: Filter links that have device targeting
            has_comments: Filter links that have comments (any comments)
            has_tags: Filter links that have tags (any tags)
            created_after: Created after date (ISO string)
            created_before: Created before date (ISO string)
            expires_after: Expires after date (ISO string)
            expires_before: Expires before date (ISO string)
            clicks_min: Minimum number of clicks
            clicks_max: Maximum number of clicks
            utm_source: Filter by UTM source value
            utm_medium: Filter by UTM medium value
            utm_campaign: Filter by UTM campaign value
            utm_content: Filter by UTM content value
            utm_term: Filter by UTM term value
            sort: The field to sort the links by. The default is ``createdAt``, and sort order is always descending.
            link_ids: Link IDs to filter by.
            page: The page number for pagination.
            page_size: The number of items per page.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/links"),
            query_params=[
                param[str | None]("projectSlug", project_slug),
                param[str | None]("domain", domain),
                param[str | None]("tagId", tag_id),
                param[TagIdsModel | TagIdsModelDict | None]("tagIds", tag_ids),
                param[TagNames | TagNamesDict | None]("tagNames", tag_names),
                param[str | None]("folderId", folder_id),
                param[str | None]("search", search),
                param[str | None]("userId", user_id),
                param[bool | None]("showArchived", show_archived),
                param[str | None]("password", password),
                param[RFC3339DateTime | None]("expiresAt", expires_at),
                param[Geo1 | Geo1Dict | None]("geo", geo),
                param[str | None]("ios", ios),
                param[str | None]("android", android),
                param[str | None]("comments", comments),
                param[bool | None]("withTags", with_tags),
                param[bool | None]("trackConversion", track_conversion),
                param[bool | None]("useAsTemplate", use_as_template),
                param[bool | None]("hasPassword", has_password),
                param[bool | None]("hasExpiration", has_expiration),
                param[bool | None]("hasUTM", has_utm),
                param[bool | None]("hasCustomSocial", has_custom_social),
                param[bool | None]("hasGeo", has_geo),
                param[bool | None]("hasDevice", has_device),
                param[bool | None]("hasComments", has_comments),
                param[bool | None]("hasTags", has_tags),
                param[RFC3339DateTime | None]("createdAfter", created_after),
                param[RFC3339DateTime | None]("createdBefore", created_before),
                param[RFC3339DateTime | None]("expiresAfter", expires_after),
                param[RFC3339DateTime | None]("expiresBefore", expires_before),
                param[int | None]("clicksMin", clicks_min),
                param[int | None]("clicksMax", clicks_max),
                param[str | None]("utm_source", utm_source),
                param[str | None]("utm_medium", utm_medium),
                param[str | None]("utm_campaign", utm_campaign),
                param[str | None]("utm_content", utm_content),
                param[str | None]("utm_term", utm_term),
                param[SortOrStr | None]("sort", sort),
                param[LinkIds | LinkIdsDict | None]("linkIds", link_ids),
                param[float | None]("page", page),
                param[float | None]("pageSize", page_size),
            ],
            auth_scheme=self._auth.token,
            decoder=async_json_decoder[list[LinkCodeqrIoLinksApi]],
            error_mapper=get_links_error_mapper,
            request_options=request_options,
        )

    async def get_links_count(
        self,
        *,
        project_slug: str | None = None,
        domain: str | None = None,
        tag_id: str | None = None,
        tag_ids: TagIdsModel | TagIdsModelDict | None = None,
        tag_names: TagNames | TagNamesDict | None = None,
        folder_id: str | None = None,
        search: str | None = None,
        user_id: str | None = None,
        show_archived: bool | None = False,
        password: str | None = None,
        expires_at: RFC3339DateTime | None = None,
        geo: Geo1 | Geo1Dict | None = None,
        ios: str | None = None,
        android: str | None = None,
        comments: str | None = None,
        with_tags: bool | None = False,
        track_conversion: bool | None = False,
        use_as_template: bool | None = None,
        has_password: bool | None = None,
        has_expiration: bool | None = None,
        has_utm: bool | None = None,
        has_custom_social: bool | None = None,
        has_geo: bool | None = None,
        has_device: bool | None = None,
        has_comments: bool | None = None,
        has_tags: bool | None = None,
        created_after: RFC3339DateTime | None = None,
        created_before: RFC3339DateTime | None = None,
        expires_after: RFC3339DateTime | None = None,
        expires_before: RFC3339DateTime | None = None,
        clicks_min: int | None = None,
        clicks_max: int | None = None,
        utm_source: str | None = None,
        utm_medium: str | None = None,
        utm_campaign: str | None = None,
        utm_content: str | None = None,
        utm_term: str | None = None,
        group_by: GroupBy4 | GroupBy4Dict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[float, GetLinksCountErrorBody]:
        """Retrieve the number of links for the authenticated workspace.

        Args:
            project_slug: The slug of the project to which the link belongs. For example, for ``app.codeqr.io/acme``,
                the projectSlug is ``acme``.
            domain: The domain to filter the links. For example, ``ac.me``. If not provided, all links of the project
                will be returned.
            tag_id: [OBSOLETO (use tagIds em vez disso)]: The unique ID of the tag assigned to the short link.
            tag_ids: The IDs of the tags to filter the links.
            tag_names: The unique name of the tags assigned to the short link (case insensitive).
            folder_id: The folder ID to filter the links by.
            search: The search term to filter the links. The search term will be matched against the short link slug and
                the destination URL.
            user_id: The ID of the user to filter by.
            show_archived: If should include archived links in the response. The default is ``false`` if not provided.
            password: The password to filter by.
            expires_at: Value sent with the request.
            geo: Geographic segmentation information for the short link in JSON format ``{[COUNTRY]: https://example.com
                }``.
            ios: The iOS device to filter by.
            android: The Android device to filter by.
            comments: The comments to filter by.
            with_tags: If should include tags in the response. The default is ``false`` if not provided.
            track_conversion: If should include links with conversion tracking enabled. The default is ``false`` if not
                provided.
            use_as_template: Filter links marked as templates.
            has_password: Filter links that have password protection (any password)
            has_expiration: Filter links that have expiration date (any expiration)
            has_utm: Filter links that have UTM parameters
            has_custom_social: Filter links that have custom social media cards
            has_geo: Filter links that have geo-targeting
            has_device: Filter links that have device targeting
            has_comments: Filter links that have comments (any comments)
            has_tags: Filter links that have tags (any tags)
            created_after: Created after date (ISO string)
            created_before: Created before date (ISO string)
            expires_after: Expires after date (ISO string)
            expires_before: Expires before date (ISO string)
            clicks_min: Minimum number of clicks
            clicks_max: Maximum number of clicks
            utm_source: Filter by UTM source value
            utm_medium: Filter by UTM medium value
            utm_campaign: Filter by UTM campaign value
            utm_content: Filter by UTM content value
            utm_term: Filter by UTM term value
            group_by: The field to group the links by.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/links/count"),
            query_params=[
                param[str | None]("projectSlug", project_slug),
                param[str | None]("domain", domain),
                param[str | None]("tagId", tag_id),
                param[TagIdsModel | TagIdsModelDict | None]("tagIds", tag_ids),
                param[TagNames | TagNamesDict | None]("tagNames", tag_names),
                param[str | None]("folderId", folder_id),
                param[str | None]("search", search),
                param[str | None]("userId", user_id),
                param[bool | None]("showArchived", show_archived),
                param[str | None]("password", password),
                param[RFC3339DateTime | None]("expiresAt", expires_at),
                param[Geo1 | Geo1Dict | None]("geo", geo),
                param[str | None]("ios", ios),
                param[str | None]("android", android),
                param[str | None]("comments", comments),
                param[bool | None]("withTags", with_tags),
                param[bool | None]("trackConversion", track_conversion),
                param[bool | None]("useAsTemplate", use_as_template),
                param[bool | None]("hasPassword", has_password),
                param[bool | None]("hasExpiration", has_expiration),
                param[bool | None]("hasUTM", has_utm),
                param[bool | None]("hasCustomSocial", has_custom_social),
                param[bool | None]("hasGeo", has_geo),
                param[bool | None]("hasDevice", has_device),
                param[bool | None]("hasComments", has_comments),
                param[bool | None]("hasTags", has_tags),
                param[RFC3339DateTime | None]("createdAfter", created_after),
                param[RFC3339DateTime | None]("createdBefore", created_before),
                param[RFC3339DateTime | None]("expiresAfter", expires_after),
                param[RFC3339DateTime | None]("expiresBefore", expires_before),
                param[int | None]("clicksMin", clicks_min),
                param[int | None]("clicksMax", clicks_max),
                param[str | None]("utm_source", utm_source),
                param[str | None]("utm_medium", utm_medium),
                param[str | None]("utm_campaign", utm_campaign),
                param[str | None]("utm_content", utm_content),
                param[str | None]("utm_term", utm_term),
                param[GroupBy4 | GroupBy4Dict | None]("groupBy", group_by),
            ],
            auth_scheme=self._auth.token,
            decoder=async_json_decoder[float],
            error_mapper=get_links_count_error_mapper,
            request_options=request_options,
        )

    async def update_link(
        self,
        link_id: str,
        *,
        body: LinksRequest1 | LinksRequest1Dict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[LinkCodeqrIoLinksApi, UpdateLinkErrorBody]:
        """Update a link for the authenticated workspace. If there's no change, returns it as it is.

        Args:
            link_id: The id of the link to update. You may use either ``linkId`` (obtained via ``/links/info`` endpoint)
                or ``externalId`` prefixed with ``ext_``.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/links/{linkId}"),
            path_params=[param[str]("linkId", link_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[LinksRequest1 | LinksRequest1Dict | None](body),
            auth_scheme=self._auth.token,
            decoder=async_json_decoder[LinkCodeqrIoLinksApi],
            error_mapper=update_link_error_mapper,
            request_options=request_options,
        )
