from __future__ import annotations

from uuid import UUID, uuid4

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    AnySchemes,
    ApiResult,
    AsyncAnySchemes,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    RawClient,
    RequestOptionsOrDict,
    SecuredRawResponse,
    async_empty_response,
    empty_response,
    param,
    unwrap,
)
from ..errors.delete_addon_error import DeleteAddonErrorBody, delete_addon_error_mapper
from ..errors.delete_addon_linkers_by_linker_key_values_by_value_id_error import (
    DeleteAddonLinkersByLinkerKeyValuesByValueIdErrorBody,
    delete_addon_linkers_by_linker_key_values_by_value_id_error_mapper,
)
from ..errors.delete_addon_linkers_by_linker_key_values_error import (
    DeleteAddonLinkersByLinkerKeyValuesErrorBody,
    delete_addon_linkers_by_linker_key_values_error_mapper,
)
from ..errors.get_addon_linkers_by_linker_key_error import (
    GetAddonLinkersByLinkerKeyErrorBody,
    get_addon_linkers_by_linker_key_error_mapper,
)
from ..errors.get_addon_linkers_by_linker_key_values_by_value_id_error import (
    GetAddonLinkersByLinkerKeyValuesByValueIdErrorBody,
    get_addon_linkers_by_linker_key_values_by_value_id_error_mapper,
)
from ..errors.get_addon_linkers_by_linker_key_values_error import (
    GetAddonLinkersByLinkerKeyValuesErrorBody,
    get_addon_linkers_by_linker_key_values_error_mapper,
)
from ..errors.get_addon_linkers_error import GetAddonLinkersErrorBody, get_addon_linkers_error_mapper
from ..errors.post_addon_linkers_by_linker_key_values_error import (
    PostAddonLinkersByLinkerKeyValuesErrorBody,
    post_addon_linkers_by_linker_key_values_error_mapper,
)
from ..errors.put_addon_error import PutAddonErrorBody, put_addon_error_mapper
from ..errors.put_addon_linkers_by_linker_key_values_error import (
    PutAddonLinkersByLinkerKeyValuesErrorBody,
    put_addon_linkers_by_linker_key_values_error_mapper,
)
from ..server.server import Server


class Addon:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = AddonWithRawResponse(client, server, auth)

    def delete_addon(self, *, request_options: RequestOptionsOrDict | None = None) -> None:
        r"""Deletes the application for the user.

        This endpoint is intended to be used by Bitbucket Connect apps and only supports JWT authentication -- that is
        how Bitbucket identifies the particular installation of the app. Developers with applications registered in the
        "Develop Apps" section of Bitbucket Marketplace need not use this endpoint as updates for those applications can
        be sent out via the UI of that section.

        ```
        $ curl -X DELETE https://api.bitbucket.org/2.0/addon \ -H "Authorization: JWT "
        ```

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Request has succeeded. The application has been deleted for the user.

        Raises:
            ApiError: No authorization. Improper authentication. ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.delete_addon(request_options=request_options))

    def delete_addon_linkers_by_linker_key_values(
        self, linker_key: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Delete all linker values for the specified linker of the authenticated application.

        This endpoint is deprecated and will be removed by May 2026.

        Args:
            linker_key: The unique key of a `linker module </cloud/bitbucket/modules/linker/>`__ as defined in an
                application descriptor.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully deleted the linker values.

        Raises:
            ApiError: Authentication must use app JWT The linker does not exist. ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.delete_addon_linkers_by_linker_key_values(
                linker_key, request_options=request_options
            ),
        )

    def delete_addon_linkers_by_linker_key_values_by_value_id(
        self, linker_key: str, value_id: int, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Delete a single linker value of the authenticated application.

        This endpoint is deprecated and will be removed by May 2026.

        Args:
            linker_key: The unique key of a `linker module </cloud/bitbucket/modules/linker/>`__ as defined in an
                application descriptor.
            value_id: The numeric ID of the linker value.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully deleted the linker value.

        Raises:
            ApiError: Authentication must use app JWT The linker value does not exist. ``error`` is ``Error |
                RawError``."""
        return unwrap(
            self._with_raw_response.delete_addon_linkers_by_linker_key_values_by_value_id(
                linker_key, value_id, request_options=request_options
            ),
        )

    def get_addon_linkers(self, *, request_options: RequestOptionsOrDict | None = None) -> None:
        """Gets a list of all linkers for the authenticated application.

        This endpoint is deprecated and will be removed by May 2026.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful.

        Raises:
            ApiError: Authentication must use app JWT ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.get_addon_linkers(request_options=request_options))

    def get_addon_linkers_by_linker_key(
        self, linker_key: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Gets a linker specified by ``linker_key`` for the authenticated application.

        This endpoint is deprecated and will be removed by May 2026.

        Args:
            linker_key: The unique key of a `linker module </cloud/bitbucket/modules/linker/>`__ as defined in an
                application descriptor.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful.

        Raises:
            ApiError: Authentication must use app JWT The linker does not exist. ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.get_addon_linkers_by_linker_key(linker_key, request_options=request_options)
        )

    def get_addon_linkers_by_linker_key_values(
        self, linker_key: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        r"""Gets a list of all linker values for the specified linker of the authenticated application.

        A linker value lets applications supply values to modify its regular expression.

        The base regular expression must use a Bitbucket-specific match group ``(?K)`` which will be translated to
        ``([\w\-]+)``. A value must match this pattern.

        Read more about linker values

        This endpoint is deprecated and will be removed by May 2026.

        Args:
            linker_key: The unique key of a `linker module </cloud/bitbucket/modules/linker/>`__ as defined in an
                application descriptor.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful.

        Raises:
            ApiError: Authentication must use app JWT The linker does not exist. ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.get_addon_linkers_by_linker_key_values(linker_key, request_options=request_options)
        )

    def get_addon_linkers_by_linker_key_values_by_value_id(
        self, linker_key: str, value_id: int, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Get a single linker value of the authenticated application.

        This endpoint is deprecated and will be removed by May 2026.

        Args:
            linker_key: The unique key of a `linker module </cloud/bitbucket/modules/linker/>`__ as defined in an
                application descriptor.
            value_id: The numeric ID of the linker value.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful.

        Raises:
            ApiError: Authentication must use app JWT The linker value does not exist. ``error`` is ``Error |
                RawError``."""
        return unwrap(
            self._with_raw_response.get_addon_linkers_by_linker_key_values_by_value_id(
                linker_key, value_id, request_options=request_options
            ),
        )

    def post_addon_linkers_by_linker_key_values(
        self, linker_key: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        r"""Creates a linker value for the specified linker of authenticated application.

        A linker value lets applications supply values to modify its regular expression.

        The base regular expression must use a Bitbucket-specific match group ``(?K)`` which will be translated to
        ``([\w\-]+)``. A value must match this pattern.

        Read more about linker values

        This endpoint is deprecated and will be removed by May 2026.

        Args:
            linker_key: The unique key of a `linker module </cloud/bitbucket/modules/linker/>`__ as defined in an
                application descriptor.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully created the linker value.

        Raises:
            ApiError: Authentication must use app JWT The linker does not exist. The linker already has the value being
                added. ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.post_addon_linkers_by_linker_key_values(linker_key, request_options=request_options)
        )

    def put_addon(self, *, request_options: RequestOptionsOrDict | None = None) -> None:
        r"""Updates the application installation for the user.

        This endpoint is intended to be used by Bitbucket Connect apps and only supports JWT authentication -- that is
        how Bitbucket identifies the particular installation of the app. Developers with applications registered in the
        "Develop Apps" section of Bitbucket need not use this endpoint as updates for those applications can be sent out
        via the UI of that section.

        Passing an empty body will update the installation using the existing descriptor URL.

        ```
        $ curl -X PUT https://api.bitbucket.org/2.0/addon \ -H "Authorization: JWT " \ --header "Content-Type:
        application/json" \ --data '{}'
        ```

        The new ``descriptor`` for the installation can be also provided in the body directly.

        ```
        $ curl -X PUT https://api.bitbucket.org/2.0/addon \ -H "Authorization: JWT " \ --header "Content-Type:
        application/json" \ --data '{"descriptor": $NEW_DESCRIPTOR}'
        ```

        In both these modes the URL of the descriptor cannot be changed. To change the descriptor location and upgrade
        an installation the request must be made exclusively with a ``descriptor_url``.

        ```
        $ curl -X PUT https://api.bitbucket.org/2.0/addon \ -H "Authorization: JWT " \ --header "Content-Type:
        application/json" \ --data '{"descriptor_url": $NEW_URL}'
        ```

        The ``descriptor_url`` must exactly match the marketplace registration that Atlassian has for the application.
        Contact your Atlassian developer advocate to update this registration. Once the registration has been updated
        you may call this resource for each installation.

        Note that the scopes of the application cannot be increased in the new descriptor nor reduced to none.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Request has succeeded. The installation has been updated to the new descriptor.

        Raises:
            ApiError: Scopes have increased or decreased to none. No authorization. Improper authentication. ``error``
                is ``Error | RawError``."""
        return unwrap(self._with_raw_response.put_addon(request_options=request_options))

    def put_addon_linkers_by_linker_key_values(
        self, linker_key: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        r"""Bulk update linker values for the specified linker of the authenticated application.

        A linker value lets applications supply values to modify its regular expression.

        The base regular expression must use a Bitbucket-specific match group ``(?K)`` which will be translated to
        ``([\w\-]+)``. A value must match this pattern.

        Read more about linker values

        This endpoint is deprecated and will be removed by May 2026.

        Args:
            linker_key: The unique key of a `linker module </cloud/bitbucket/modules/linker/>`__ as defined in an
                application descriptor.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully updated the linker values.

        Raises:
            ApiError: Invalid input. Authentication must use app JWT The linker does not exist. ``error`` is ``Error |
                RawError``."""
        return unwrap(
            self._with_raw_response.put_addon_linkers_by_linker_key_values(linker_key, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> AddonWithRawResponse:
        return self._with_raw_response


class AsyncAddon:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncAddonWithRawResponse(client, server, auth)

    async def delete_addon(self, *, request_options: AsyncRequestOptionsOrDict | None = None) -> None:
        r"""Deletes the application for the user.

        This endpoint is intended to be used by Bitbucket Connect apps and only supports JWT authentication -- that is
        how Bitbucket identifies the particular installation of the app. Developers with applications registered in the
        "Develop Apps" section of Bitbucket Marketplace need not use this endpoint as updates for those applications can
        be sent out via the UI of that section.

        ```
        $ curl -X DELETE https://api.bitbucket.org/2.0/addon \ -H "Authorization: JWT "
        ```

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Request has succeeded. The application has been deleted for the user.

        Raises:
            ApiError: No authorization. Improper authentication. ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.delete_addon(request_options=request_options))

    async def delete_addon_linkers_by_linker_key_values(
        self, linker_key: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Delete all linker values for the specified linker of the authenticated application.

        This endpoint is deprecated and will be removed by May 2026.

        Args:
            linker_key: The unique key of a `linker module </cloud/bitbucket/modules/linker/>`__ as defined in an
                application descriptor.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully deleted the linker values.

        Raises:
            ApiError: Authentication must use app JWT The linker does not exist. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.delete_addon_linkers_by_linker_key_values(
                linker_key, request_options=request_options
            ),
        )

    async def delete_addon_linkers_by_linker_key_values_by_value_id(
        self, linker_key: str, value_id: int, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Delete a single linker value of the authenticated application.

        This endpoint is deprecated and will be removed by May 2026.

        Args:
            linker_key: The unique key of a `linker module </cloud/bitbucket/modules/linker/>`__ as defined in an
                application descriptor.
            value_id: The numeric ID of the linker value.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully deleted the linker value.

        Raises:
            ApiError: Authentication must use app JWT The linker value does not exist. ``error`` is ``Error |
                RawError``."""
        return unwrap(
            await self._with_raw_response.delete_addon_linkers_by_linker_key_values_by_value_id(
                linker_key, value_id, request_options=request_options
            ),
        )

    async def get_addon_linkers(self, *, request_options: AsyncRequestOptionsOrDict | None = None) -> None:
        """Gets a list of all linkers for the authenticated application.

        This endpoint is deprecated and will be removed by May 2026.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful.

        Raises:
            ApiError: Authentication must use app JWT ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.get_addon_linkers(request_options=request_options))

    async def get_addon_linkers_by_linker_key(
        self, linker_key: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Gets a linker specified by ``linker_key`` for the authenticated application.

        This endpoint is deprecated and will be removed by May 2026.

        Args:
            linker_key: The unique key of a `linker module </cloud/bitbucket/modules/linker/>`__ as defined in an
                application descriptor.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful.

        Raises:
            ApiError: Authentication must use app JWT The linker does not exist. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.get_addon_linkers_by_linker_key(linker_key, request_options=request_options)
        )

    async def get_addon_linkers_by_linker_key_values(
        self, linker_key: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        r"""Gets a list of all linker values for the specified linker of the authenticated application.

        A linker value lets applications supply values to modify its regular expression.

        The base regular expression must use a Bitbucket-specific match group ``(?K)`` which will be translated to
        ``([\w\-]+)``. A value must match this pattern.

        Read more about linker values

        This endpoint is deprecated and will be removed by May 2026.

        Args:
            linker_key: The unique key of a `linker module </cloud/bitbucket/modules/linker/>`__ as defined in an
                application descriptor.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful.

        Raises:
            ApiError: Authentication must use app JWT The linker does not exist. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.get_addon_linkers_by_linker_key_values(
                linker_key, request_options=request_options
            ),
        )

    async def get_addon_linkers_by_linker_key_values_by_value_id(
        self, linker_key: str, value_id: int, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Get a single linker value of the authenticated application.

        This endpoint is deprecated and will be removed by May 2026.

        Args:
            linker_key: The unique key of a `linker module </cloud/bitbucket/modules/linker/>`__ as defined in an
                application descriptor.
            value_id: The numeric ID of the linker value.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful.

        Raises:
            ApiError: Authentication must use app JWT The linker value does not exist. ``error`` is ``Error |
                RawError``."""
        return unwrap(
            await self._with_raw_response.get_addon_linkers_by_linker_key_values_by_value_id(
                linker_key, value_id, request_options=request_options
            ),
        )

    async def post_addon_linkers_by_linker_key_values(
        self, linker_key: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        r"""Creates a linker value for the specified linker of authenticated application.

        A linker value lets applications supply values to modify its regular expression.

        The base regular expression must use a Bitbucket-specific match group ``(?K)`` which will be translated to
        ``([\w\-]+)``. A value must match this pattern.

        Read more about linker values

        This endpoint is deprecated and will be removed by May 2026.

        Args:
            linker_key: The unique key of a `linker module </cloud/bitbucket/modules/linker/>`__ as defined in an
                application descriptor.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully created the linker value.

        Raises:
            ApiError: Authentication must use app JWT The linker does not exist. The linker already has the value being
                added. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.post_addon_linkers_by_linker_key_values(
                linker_key, request_options=request_options
            ),
        )

    async def put_addon(self, *, request_options: AsyncRequestOptionsOrDict | None = None) -> None:
        r"""Updates the application installation for the user.

        This endpoint is intended to be used by Bitbucket Connect apps and only supports JWT authentication -- that is
        how Bitbucket identifies the particular installation of the app. Developers with applications registered in the
        "Develop Apps" section of Bitbucket need not use this endpoint as updates for those applications can be sent out
        via the UI of that section.

        Passing an empty body will update the installation using the existing descriptor URL.

        ```
        $ curl -X PUT https://api.bitbucket.org/2.0/addon \ -H "Authorization: JWT " \ --header "Content-Type:
        application/json" \ --data '{}'
        ```

        The new ``descriptor`` for the installation can be also provided in the body directly.

        ```
        $ curl -X PUT https://api.bitbucket.org/2.0/addon \ -H "Authorization: JWT " \ --header "Content-Type:
        application/json" \ --data '{"descriptor": $NEW_DESCRIPTOR}'
        ```

        In both these modes the URL of the descriptor cannot be changed. To change the descriptor location and upgrade
        an installation the request must be made exclusively with a ``descriptor_url``.

        ```
        $ curl -X PUT https://api.bitbucket.org/2.0/addon \ -H "Authorization: JWT " \ --header "Content-Type:
        application/json" \ --data '{"descriptor_url": $NEW_URL}'
        ```

        The ``descriptor_url`` must exactly match the marketplace registration that Atlassian has for the application.
        Contact your Atlassian developer advocate to update this registration. Once the registration has been updated
        you may call this resource for each installation.

        Note that the scopes of the application cannot be increased in the new descriptor nor reduced to none.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Request has succeeded. The installation has been updated to the new descriptor.

        Raises:
            ApiError: Scopes have increased or decreased to none. No authorization. Improper authentication. ``error``
                is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.put_addon(request_options=request_options))

    async def put_addon_linkers_by_linker_key_values(
        self, linker_key: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        r"""Bulk update linker values for the specified linker of the authenticated application.

        A linker value lets applications supply values to modify its regular expression.

        The base regular expression must use a Bitbucket-specific match group ``(?K)`` which will be translated to
        ``([\w\-]+)``. A value must match this pattern.

        Read more about linker values

        This endpoint is deprecated and will be removed by May 2026.

        Args:
            linker_key: The unique key of a `linker module </cloud/bitbucket/modules/linker/>`__ as defined in an
                application descriptor.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully updated the linker values.

        Raises:
            ApiError: Invalid input. Authentication must use app JWT The linker does not exist. ``error`` is ``Error |
                RawError``."""
        return unwrap(
            await self._with_raw_response.put_addon_linkers_by_linker_key_values(
                linker_key, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncAddonWithRawResponse:
        return self._with_raw_response


class AddonWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def delete_addon(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteAddonErrorBody]:
        r"""Deletes the application for the user.

        This endpoint is intended to be used by Bitbucket Connect apps and only supports JWT authentication -- that is
        how Bitbucket identifies the particular installation of the app. Developers with applications registered in the
        "Develop Apps" section of Bitbucket Marketplace need not use this endpoint as updates for those applications can
        be sent out via the UI of that section.

        ```
        $ curl -X DELETE https://api.bitbucket.org/2.0/addon \ -H "Authorization: JWT "
        ```

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/addon"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=empty_response,
            error_mapper=delete_addon_error_mapper,
            request_options=request_options,
        )

    def delete_addon_linkers_by_linker_key_values(
        self, linker_key: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteAddonLinkersByLinkerKeyValuesErrorBody]:
        """Delete all linker values for the specified linker of the authenticated application.

        This endpoint is deprecated and will be removed by May 2026.

        Args:
            linker_key: The unique key of a `linker module </cloud/bitbucket/modules/linker/>`__ as defined in an
                application descriptor.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/addon/linkers/{linker_key}/values"),
            path_params=[param[str]("linker_key", linker_key)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=empty_response,
            error_mapper=delete_addon_linkers_by_linker_key_values_error_mapper,
            request_options=request_options,
        )

    def delete_addon_linkers_by_linker_key_values_by_value_id(
        self, linker_key: str, value_id: int, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteAddonLinkersByLinkerKeyValuesByValueIdErrorBody]:
        """Delete a single linker value of the authenticated application.

        This endpoint is deprecated and will be removed by May 2026.

        Args:
            linker_key: The unique key of a `linker module </cloud/bitbucket/modules/linker/>`__ as defined in an
                application descriptor.
            value_id: The numeric ID of the linker value.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/addon/linkers/{linker_key}/values/{value_id}"),
            path_params=[param[str]("linker_key", linker_key), param[int]("value_id", value_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=empty_response,
            error_mapper=delete_addon_linkers_by_linker_key_values_by_value_id_error_mapper,
            request_options=request_options,
        )

    def get_addon_linkers(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, GetAddonLinkersErrorBody]:
        """Gets a list of all linkers for the authenticated application.

        This endpoint is deprecated and will be removed by May 2026.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/addon/linkers"),
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=empty_response,
            error_mapper=get_addon_linkers_error_mapper,
            request_options=request_options,
        )

    def get_addon_linkers_by_linker_key(
        self, linker_key: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, GetAddonLinkersByLinkerKeyErrorBody]:
        """Gets a linker specified by ``linker_key`` for the authenticated application.

        This endpoint is deprecated and will be removed by May 2026.

        Args:
            linker_key: The unique key of a `linker module </cloud/bitbucket/modules/linker/>`__ as defined in an
                application descriptor.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/addon/linkers/{linker_key}"),
            path_params=[param[str]("linker_key", linker_key)],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=empty_response,
            error_mapper=get_addon_linkers_by_linker_key_error_mapper,
            request_options=request_options,
        )

    def get_addon_linkers_by_linker_key_values(
        self, linker_key: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, GetAddonLinkersByLinkerKeyValuesErrorBody]:
        r"""Gets a list of all linker values for the specified linker of the authenticated application.

        A linker value lets applications supply values to modify its regular expression.

        The base regular expression must use a Bitbucket-specific match group ``(?K)`` which will be translated to
        ``([\w\-]+)``. A value must match this pattern.

        Read more about linker values

        This endpoint is deprecated and will be removed by May 2026.

        Args:
            linker_key: The unique key of a `linker module </cloud/bitbucket/modules/linker/>`__ as defined in an
                application descriptor.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/addon/linkers/{linker_key}/values"),
            path_params=[param[str]("linker_key", linker_key)],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=empty_response,
            error_mapper=get_addon_linkers_by_linker_key_values_error_mapper,
            request_options=request_options,
        )

    def get_addon_linkers_by_linker_key_values_by_value_id(
        self, linker_key: str, value_id: int, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, GetAddonLinkersByLinkerKeyValuesByValueIdErrorBody]:
        """Get a single linker value of the authenticated application.

        This endpoint is deprecated and will be removed by May 2026.

        Args:
            linker_key: The unique key of a `linker module </cloud/bitbucket/modules/linker/>`__ as defined in an
                application descriptor.
            value_id: The numeric ID of the linker value.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/addon/linkers/{linker_key}/values/{value_id}"),
            path_params=[param[str]("linker_key", linker_key), param[int]("value_id", value_id)],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=empty_response,
            error_mapper=get_addon_linkers_by_linker_key_values_by_value_id_error_mapper,
            request_options=request_options,
        )

    def post_addon_linkers_by_linker_key_values(
        self, linker_key: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, PostAddonLinkersByLinkerKeyValuesErrorBody]:
        r"""Creates a linker value for the specified linker of authenticated application.

        A linker value lets applications supply values to modify its regular expression.

        The base regular expression must use a Bitbucket-specific match group ``(?K)`` which will be translated to
        ``([\w\-]+)``. A value must match this pattern.

        Read more about linker values

        This endpoint is deprecated and will be removed by May 2026.

        Args:
            linker_key: The unique key of a `linker module </cloud/bitbucket/modules/linker/>`__ as defined in an
                application descriptor.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/addon/linkers/{linker_key}/values"),
            path_params=[param[str]("linker_key", linker_key)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=empty_response,
            error_mapper=post_addon_linkers_by_linker_key_values_error_mapper,
            request_options=request_options,
        )

    def put_addon(self, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, PutAddonErrorBody]:
        r"""Updates the application installation for the user.

        This endpoint is intended to be used by Bitbucket Connect apps and only supports JWT authentication -- that is
        how Bitbucket identifies the particular installation of the app. Developers with applications registered in the
        "Develop Apps" section of Bitbucket need not use this endpoint as updates for those applications can be sent out
        via the UI of that section.

        Passing an empty body will update the installation using the existing descriptor URL.

        ```
        $ curl -X PUT https://api.bitbucket.org/2.0/addon \ -H "Authorization: JWT " \ --header "Content-Type:
        application/json" \ --data '{}'
        ```

        The new ``descriptor`` for the installation can be also provided in the body directly.

        ```
        $ curl -X PUT https://api.bitbucket.org/2.0/addon \ -H "Authorization: JWT " \ --header "Content-Type:
        application/json" \ --data '{"descriptor": $NEW_DESCRIPTOR}'
        ```

        In both these modes the URL of the descriptor cannot be changed. To change the descriptor location and upgrade
        an installation the request must be made exclusively with a ``descriptor_url``.

        ```
        $ curl -X PUT https://api.bitbucket.org/2.0/addon \ -H "Authorization: JWT " \ --header "Content-Type:
        application/json" \ --data '{"descriptor_url": $NEW_URL}'
        ```

        The ``descriptor_url`` must exactly match the marketplace registration that Atlassian has for the application.
        Contact your Atlassian developer advocate to update this registration. Once the registration has been updated
        you may call this resource for each installation.

        Note that the scopes of the application cannot be increased in the new descriptor nor reduced to none.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/addon"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=empty_response,
            error_mapper=put_addon_error_mapper,
            request_options=request_options,
        )

    def put_addon_linkers_by_linker_key_values(
        self, linker_key: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, PutAddonLinkersByLinkerKeyValuesErrorBody]:
        r"""Bulk update linker values for the specified linker of the authenticated application.

        A linker value lets applications supply values to modify its regular expression.

        The base regular expression must use a Bitbucket-specific match group ``(?K)`` which will be translated to
        ``([\w\-]+)``. A value must match this pattern.

        Read more about linker values

        This endpoint is deprecated and will be removed by May 2026.

        Args:
            linker_key: The unique key of a `linker module </cloud/bitbucket/modules/linker/>`__ as defined in an
                application descriptor.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/addon/linkers/{linker_key}/values"),
            path_params=[param[str]("linker_key", linker_key)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=empty_response,
            error_mapper=put_addon_linkers_by_linker_key_values_error_mapper,
            request_options=request_options,
        )


class AsyncAddonWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def delete_addon(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteAddonErrorBody]:
        r"""Deletes the application for the user.

        This endpoint is intended to be used by Bitbucket Connect apps and only supports JWT authentication -- that is
        how Bitbucket identifies the particular installation of the app. Developers with applications registered in the
        "Develop Apps" section of Bitbucket Marketplace need not use this endpoint as updates for those applications can
        be sent out via the UI of that section.

        ```
        $ curl -X DELETE https://api.bitbucket.org/2.0/addon \ -H "Authorization: JWT "
        ```

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/addon"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_empty_response,
            error_mapper=delete_addon_error_mapper,
            request_options=request_options,
        )

    async def delete_addon_linkers_by_linker_key_values(
        self, linker_key: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteAddonLinkersByLinkerKeyValuesErrorBody]:
        """Delete all linker values for the specified linker of the authenticated application.

        This endpoint is deprecated and will be removed by May 2026.

        Args:
            linker_key: The unique key of a `linker module </cloud/bitbucket/modules/linker/>`__ as defined in an
                application descriptor.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/addon/linkers/{linker_key}/values"),
            path_params=[param[str]("linker_key", linker_key)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_empty_response,
            error_mapper=delete_addon_linkers_by_linker_key_values_error_mapper,
            request_options=request_options,
        )

    async def delete_addon_linkers_by_linker_key_values_by_value_id(
        self, linker_key: str, value_id: int, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteAddonLinkersByLinkerKeyValuesByValueIdErrorBody]:
        """Delete a single linker value of the authenticated application.

        This endpoint is deprecated and will be removed by May 2026.

        Args:
            linker_key: The unique key of a `linker module </cloud/bitbucket/modules/linker/>`__ as defined in an
                application descriptor.
            value_id: The numeric ID of the linker value.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/addon/linkers/{linker_key}/values/{value_id}"),
            path_params=[param[str]("linker_key", linker_key), param[int]("value_id", value_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_empty_response,
            error_mapper=delete_addon_linkers_by_linker_key_values_by_value_id_error_mapper,
            request_options=request_options,
        )

    async def get_addon_linkers(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, GetAddonLinkersErrorBody]:
        """Gets a list of all linkers for the authenticated application.

        This endpoint is deprecated and will be removed by May 2026.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/addon/linkers"),
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_empty_response,
            error_mapper=get_addon_linkers_error_mapper,
            request_options=request_options,
        )

    async def get_addon_linkers_by_linker_key(
        self, linker_key: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, GetAddonLinkersByLinkerKeyErrorBody]:
        """Gets a linker specified by ``linker_key`` for the authenticated application.

        This endpoint is deprecated and will be removed by May 2026.

        Args:
            linker_key: The unique key of a `linker module </cloud/bitbucket/modules/linker/>`__ as defined in an
                application descriptor.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/addon/linkers/{linker_key}"),
            path_params=[param[str]("linker_key", linker_key)],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_empty_response,
            error_mapper=get_addon_linkers_by_linker_key_error_mapper,
            request_options=request_options,
        )

    async def get_addon_linkers_by_linker_key_values(
        self, linker_key: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, GetAddonLinkersByLinkerKeyValuesErrorBody]:
        r"""Gets a list of all linker values for the specified linker of the authenticated application.

        A linker value lets applications supply values to modify its regular expression.

        The base regular expression must use a Bitbucket-specific match group ``(?K)`` which will be translated to
        ``([\w\-]+)``. A value must match this pattern.

        Read more about linker values

        This endpoint is deprecated and will be removed by May 2026.

        Args:
            linker_key: The unique key of a `linker module </cloud/bitbucket/modules/linker/>`__ as defined in an
                application descriptor.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/addon/linkers/{linker_key}/values"),
            path_params=[param[str]("linker_key", linker_key)],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_empty_response,
            error_mapper=get_addon_linkers_by_linker_key_values_error_mapper,
            request_options=request_options,
        )

    async def get_addon_linkers_by_linker_key_values_by_value_id(
        self, linker_key: str, value_id: int, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, GetAddonLinkersByLinkerKeyValuesByValueIdErrorBody]:
        """Get a single linker value of the authenticated application.

        This endpoint is deprecated and will be removed by May 2026.

        Args:
            linker_key: The unique key of a `linker module </cloud/bitbucket/modules/linker/>`__ as defined in an
                application descriptor.
            value_id: The numeric ID of the linker value.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/addon/linkers/{linker_key}/values/{value_id}"),
            path_params=[param[str]("linker_key", linker_key), param[int]("value_id", value_id)],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_empty_response,
            error_mapper=get_addon_linkers_by_linker_key_values_by_value_id_error_mapper,
            request_options=request_options,
        )

    async def post_addon_linkers_by_linker_key_values(
        self, linker_key: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, PostAddonLinkersByLinkerKeyValuesErrorBody]:
        r"""Creates a linker value for the specified linker of authenticated application.

        A linker value lets applications supply values to modify its regular expression.

        The base regular expression must use a Bitbucket-specific match group ``(?K)`` which will be translated to
        ``([\w\-]+)``. A value must match this pattern.

        Read more about linker values

        This endpoint is deprecated and will be removed by May 2026.

        Args:
            linker_key: The unique key of a `linker module </cloud/bitbucket/modules/linker/>`__ as defined in an
                application descriptor.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/addon/linkers/{linker_key}/values"),
            path_params=[param[str]("linker_key", linker_key)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_empty_response,
            error_mapper=post_addon_linkers_by_linker_key_values_error_mapper,
            request_options=request_options,
        )

    async def put_addon(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, PutAddonErrorBody]:
        r"""Updates the application installation for the user.

        This endpoint is intended to be used by Bitbucket Connect apps and only supports JWT authentication -- that is
        how Bitbucket identifies the particular installation of the app. Developers with applications registered in the
        "Develop Apps" section of Bitbucket need not use this endpoint as updates for those applications can be sent out
        via the UI of that section.

        Passing an empty body will update the installation using the existing descriptor URL.

        ```
        $ curl -X PUT https://api.bitbucket.org/2.0/addon \ -H "Authorization: JWT " \ --header "Content-Type:
        application/json" \ --data '{}'
        ```

        The new ``descriptor`` for the installation can be also provided in the body directly.

        ```
        $ curl -X PUT https://api.bitbucket.org/2.0/addon \ -H "Authorization: JWT " \ --header "Content-Type:
        application/json" \ --data '{"descriptor": $NEW_DESCRIPTOR}'
        ```

        In both these modes the URL of the descriptor cannot be changed. To change the descriptor location and upgrade
        an installation the request must be made exclusively with a ``descriptor_url``.

        ```
        $ curl -X PUT https://api.bitbucket.org/2.0/addon \ -H "Authorization: JWT " \ --header "Content-Type:
        application/json" \ --data '{"descriptor_url": $NEW_URL}'
        ```

        The ``descriptor_url`` must exactly match the marketplace registration that Atlassian has for the application.
        Contact your Atlassian developer advocate to update this registration. Once the registration has been updated
        you may call this resource for each installation.

        Note that the scopes of the application cannot be increased in the new descriptor nor reduced to none.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/addon"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_empty_response,
            error_mapper=put_addon_error_mapper,
            request_options=request_options,
        )

    async def put_addon_linkers_by_linker_key_values(
        self, linker_key: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, PutAddonLinkersByLinkerKeyValuesErrorBody]:
        r"""Bulk update linker values for the specified linker of the authenticated application.

        A linker value lets applications supply values to modify its regular expression.

        The base regular expression must use a Bitbucket-specific match group ``(?K)`` which will be translated to
        ``([\w\-]+)``. A value must match this pattern.

        Read more about linker values

        This endpoint is deprecated and will be removed by May 2026.

        Args:
            linker_key: The unique key of a `linker module </cloud/bitbucket/modules/linker/>`__ as defined in an
                application descriptor.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/addon/linkers/{linker_key}/values"),
            path_params=[param[str]("linker_key", linker_key)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_empty_response,
            error_mapper=put_addon_linkers_by_linker_key_values_error_mapper,
            request_options=request_options,
        )
