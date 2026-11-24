from __future__ import annotations

from uuid import UUID, uuid4

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    ApiResult,
    AsyncFileInput,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    FileInput,
    RawClient,
    RequestOptionsOrDict,
    SecuredRawResponse,
    async_json_decoder,
    file_part,
    json_body,
    json_decoder,
    multipart_body,
    param,
    unwrap,
)
from ..errors.upload_abort_multipart_upload_error import (
    UploadAbortMultipartUploadErrorBody,
    upload_abort_multipart_upload_error_mapper,
)
from ..errors.upload_complete_multipart_upload_error import (
    UploadCompleteMultipartUploadErrorBody,
    upload_complete_multipart_upload_error_mapper,
)
from ..errors.upload_create_error import UploadCreateErrorBody, upload_create_error_mapper
from ..errors.upload_create_from_url_error import UploadCreateFromUrlErrorBody, upload_create_from_url_error_mapper
from ..errors.upload_delete_error import UploadDeleteErrorBody, upload_delete_error_mapper
from ..errors.upload_delete_many_error import UploadDeleteManyErrorBody, upload_delete_many_error_mapper
from ..errors.upload_finalize_large_upload_error import (
    UploadFinalizeLargeUploadErrorBody,
    upload_finalize_large_upload_error_mapper,
)
from ..errors.upload_get_error import UploadGetErrorBody, upload_get_error_mapper
from ..errors.upload_get_list_error import UploadGetListErrorBody, upload_get_list_error_mapper
from ..errors.upload_init_large_upload_error import (
    UploadInitLargeUploadErrorBody,
    upload_init_large_upload_error_mapper,
)
from ..errors.upload_init_multipart_upload_error import (
    UploadInitMultipartUploadErrorBody,
    upload_init_multipart_upload_error_mapper,
)
from ..errors.upload_sign_multipart_parts_error import (
    UploadSignMultipartPartsErrorBody,
    upload_sign_multipart_parts_error_mapper,
)
from ..models.api_v1_upload_finalize_request import ApiV1UploadFinalizeRequest, ApiV1UploadFinalizeRequestDict
from ..models.api_v1_upload_finalize_response import ApiV1UploadFinalizeResponse
from ..models.api_v1_upload_from_url_request import ApiV1UploadFromUrlRequest, ApiV1UploadFromUrlRequestDict
from ..models.api_v1_upload_from_url_response import ApiV1UploadFromUrlResponse
from ..models.api_v1_upload_init_request import ApiV1UploadInitRequest, ApiV1UploadInitRequestDict
from ..models.api_v1_upload_init_response import ApiV1UploadInitResponse
from ..models.api_v1_upload_multipart_abort_request import (
    ApiV1UploadMultipartAbortRequest,
    ApiV1UploadMultipartAbortRequestDict,
)
from ..models.api_v1_upload_multipart_abort_response import ApiV1UploadMultipartAbortResponse
from ..models.api_v1_upload_multipart_complete_request import (
    ApiV1UploadMultipartCompleteRequest,
    ApiV1UploadMultipartCompleteRequestDict,
)
from ..models.api_v1_upload_multipart_complete_response import ApiV1UploadMultipartCompleteResponse
from ..models.api_v1_upload_multipart_init_request import (
    ApiV1UploadMultipartInitRequest,
    ApiV1UploadMultipartInitRequestDict,
)
from ..models.api_v1_upload_multipart_init_response import ApiV1UploadMultipartInitResponse
from ..models.api_v1_upload_multipart_sign_request import (
    ApiV1UploadMultipartSignRequest,
    ApiV1UploadMultipartSignRequestDict,
)
from ..models.api_v1_upload_multipart_sign_response import ApiV1UploadMultipartSignResponse
from ..models.api_v1_upload_request import ApiV1UploadRequest, ApiV1UploadRequestDict
from ..models.api_v1_upload_response import ApiV1UploadResponse
from ..models.api_v1_upload_response1 import ApiV1UploadResponse1
from ..models.enums.status_bundle_social_upload_api import StatusBundleSocialUploadApiOrStr
from ..models.enums.type_bundle_social_upload_api import TypeBundleSocialUploadApiOrStr
from ..models.unions.include_posts2 import IncludePosts2, IncludePosts2Dict
from ..server.server import Server


class UploadApi:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = UploadApiWithRawResponse(client, server, auth)

    def upload_abort_multipart_upload(
        self,
        *,
        body: ApiV1UploadMultipartAbortRequest | ApiV1UploadMultipartAbortRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1UploadMultipartAbortResponse:
        """Discard an unfinished multipart upload and its parts. Call this when you give up on an upload — abandoned
        parts stay in storage and count against your usage.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1UploadMultipartAbort400Error1 |
                ApiV1UploadMultipartAbort401Error1 | ApiV1UploadMultipartAbort403Error1 |
                ApiV1UploadMultipartAbort404Error1 | ApiV1UploadMultipartAbort429Error1 |
                ApiV1UploadMultipartAbort500Error1 | ApiV1UploadMultipartAbort502Error1 |
                ApiV1UploadMultipartAbort503Error1 | ApiV1UploadMultipartAbort504Error1 | RawError``."""
        return unwrap(self._with_raw_response.upload_abort_multipart_upload(body=body, request_options=request_options))

    def upload_complete_multipart_upload(
        self,
        *,
        body: ApiV1UploadMultipartCompleteRequest | ApiV1UploadMultipartCompleteRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1UploadMultipartCompleteResponse:
        """Assemble the uploaded parts into the final object and add it to your media library. Send every part with the
        ETag returned by its PUT. A 500 is always retryable — whatever we have (your parts, or the assembled object) is
        kept, so retry this call rather than re-uploading. A 400 is final: either the part list was wrong, or the file
        itself was rejected (empty, wrong type, too large, no readable preview) and its bytes have been deleted. A 403
        means quota or permissions and is raised before assembly, so your parts are still open — call abort yourself.
        Calling this again after it already succeeded returns the same upload instead of charging you twice.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1UploadMultipartComplete400Error1 |
                ApiV1UploadMultipartComplete401Error1 | ApiV1UploadMultipartComplete403Error1 |
                ApiV1UploadMultipartComplete404Error1 | ApiV1UploadMultipartComplete429Error1 |
                ApiV1UploadMultipartComplete500Error1 | ApiV1UploadMultipartComplete502Error1 |
                ApiV1UploadMultipartComplete503Error1 | ApiV1UploadMultipartComplete504Error1 | RawError``."""
        return unwrap(
            self._with_raw_response.upload_complete_multipart_upload(body=body, request_options=request_options)
        )

    def upload_create(
        self,
        *,
        team_id: str | None = None,
        file: FileInput | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1UploadResponse1:
        """Upload a file. This is the only endpoint that uses multipart/form-data.

        Args:
            team_id: Value sent with the request.
            file: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1Upload400Error1 | ApiV1Upload401Error1 |
                ApiV1Upload403Error1 | ApiV1Upload404Error1 | ApiV1Upload429Error1 | ApiV1Upload500Error1 |
                ApiV1Upload502Error1 | ApiV1Upload503Error1 | ApiV1Upload504Error1 | RawError``."""
        return unwrap(
            self._with_raw_response.upload_create(team_id=team_id, file=file, request_options=request_options)
        )

    def upload_create_from_url(
        self,
        *,
        body: ApiV1UploadFromUrlRequest | ApiV1UploadFromUrlRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1UploadFromUrlResponse:
        """Add an image or video to your media library by giving bundle.social a public URL to fetch, instead of
        uploading the bytes yourself. Useful when your media already lives in a CDN or S3 bucket.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1UploadFromUrl400Error1 |
                ApiV1UploadFromUrl401Error1 | ApiV1UploadFromUrl403Error1 | ApiV1UploadFromUrl404Error1 |
                ApiV1UploadFromUrl429Error1 | ApiV1UploadFromUrl500Error1 | ApiV1UploadFromUrl502Error1 |
                ApiV1UploadFromUrl503Error1 | ApiV1UploadFromUrl504Error1 | RawError``."""
        return unwrap(self._with_raw_response.upload_create_from_url(body=body, request_options=request_options))

    def upload_delete(self, id_: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiV1UploadResponse1:
        """Permanently delete a single media file from your library. Files still attached to scheduled posts should be
        replaced first.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1Upload400Error1 | ApiV1Upload401Error1 |
                ApiV1Upload403Error1 | ApiV1Upload404Error1 | ApiV1Upload429Error1 | ApiV1Upload500Error1 |
                ApiV1Upload502Error1 | ApiV1Upload503Error1 | ApiV1Upload504Error1 | RawError``."""
        return unwrap(self._with_raw_response.upload_delete(id_, request_options=request_options))

    def upload_delete_many(
        self,
        *,
        body: ApiV1UploadRequest | ApiV1UploadRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> list[ApiV1UploadResponse1]:
        """Permanently delete several media files in one request. Use it to clean up your library in bulk instead of
        calling delete per file.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1Upload400Error1 | ApiV1Upload401Error1 |
                ApiV1Upload403Error1 | ApiV1Upload404Error1 | ApiV1Upload429Error1 | ApiV1Upload500Error1 |
                ApiV1Upload502Error1 | ApiV1Upload503Error1 | ApiV1Upload504Error1 | RawError``."""
        return unwrap(self._with_raw_response.upload_delete_many(body=body, request_options=request_options))

    def upload_finalize_large_upload(
        self,
        *,
        body: ApiV1UploadFinalizeRequest | ApiV1UploadFinalizeRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1UploadFinalizeResponse:
        """Finalize large upload.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1UploadFinalize400Error1 |
                ApiV1UploadFinalize401Error1 | ApiV1UploadFinalize403Error1 | ApiV1UploadFinalize404Error1 |
                ApiV1UploadFinalize429Error1 | ApiV1UploadFinalize500Error1 | ApiV1UploadFinalize502Error1 |
                ApiV1UploadFinalize503Error1 | ApiV1UploadFinalize504Error1 | RawError``."""
        return unwrap(self._with_raw_response.upload_finalize_large_upload(body=body, request_options=request_options))

    def upload_get(self, id_: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiV1UploadResponse:
        """Retrieve a single media file with its processing status, dimensions, duration, and the posts it is attached
        to.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1Upload400Error1 | ApiV1Upload401Error1 |
                ApiV1Upload403Error1 | ApiV1Upload404Error1 | ApiV1Upload429Error1 | ApiV1Upload500Error1 |
                ApiV1Upload502Error1 | ApiV1Upload503Error1 | ApiV1Upload504Error1 | RawError``."""
        return unwrap(self._with_raw_response.upload_get(id_, request_options=request_options))

    def upload_get_list(
        self,
        *,
        team_id: str | None = None,
        type_: TypeBundleSocialUploadApiOrStr | None = None,
        types: list[TypeBundleSocialUploadApiOrStr] | None = None,
        status: StatusBundleSocialUploadApiOrStr | None = None,
        ids: list[str] | None = None,
        urls: list[str] | None = None,
        limit: int | None = None,
        include_posts: IncludePosts2 | IncludePosts2Dict | None = None,
        offset: int | None = 0,
        request_options: RequestOptionsOrDict | None = None,
    ) -> list[ApiV1UploadResponse]:
        """List the media files in your team's library, newest first. Each file carries ``posts``, the links to the
        posts using it — pass ``includePosts=false`` to leave them out. Page with ``limit`` and ``offset``. To check
        whether specific files already exist, filter by ``ids`` or ``urls`` instead of listing everything.

        Args:
            team_id: Value sent with the request.
            type_: Value sent with the request.
            types: Value sent with the request.
            status: Value sent with the request.
            ids: Value sent with the request.
            urls: Value sent with the request.
            limit: Value sent with the request.
            include_posts: Value sent with the request.
            offset: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1Upload400Error1 | ApiV1Upload401Error1 |
                ApiV1Upload403Error1 | ApiV1Upload404Error1 | ApiV1Upload429Error1 | ApiV1Upload500Error1 |
                ApiV1Upload502Error1 | ApiV1Upload503Error1 | ApiV1Upload504Error1 | RawError``."""
        return unwrap(
            self._with_raw_response.upload_get_list(
                team_id=team_id,
                type_=type_,
                types=types,
                status=status,
                ids=ids,
                urls=urls,
                limit=limit,
                include_posts=include_posts,
                offset=offset,
                request_options=request_options,
            ),
        )

    def upload_init_large_upload(
        self,
        *,
        body: ApiV1UploadInitRequest | ApiV1UploadInitRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1UploadInitResponse:
        """Initialize large upload, you need to initialize a large upload if your file is larger than 90 MB.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1UploadInit400Error1 |
                ApiV1UploadInit401Error1 | ApiV1UploadInit403Error1 | ApiV1UploadInit404Error1 |
                ApiV1UploadInit429Error1 | ApiV1UploadInit500Error1 | ApiV1UploadInit502Error1 |
                ApiV1UploadInit503Error1 | ApiV1UploadInit504Error1 | RawError``."""
        return unwrap(self._with_raw_response.upload_init_large_upload(body=body, request_options=request_options))

    def upload_init_multipart_upload(
        self,
        *,
        body: ApiV1UploadMultipartInitRequest | ApiV1UploadMultipartInitRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1UploadMultipartInitResponse:
        """Start a multipart upload. Required above the 5 GiB single-request storage limit that /upload/init is bound
        by, and allowed for any smaller file too. Returns an uploadId plus one presigned URL per part; PUT each part,
        keep the ETag response header, then call complete with the full part list. Parts are 64 MiB each except the
        last, up to 10000 parts.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1UploadMultipartInit400Error1 |
                ApiV1UploadMultipartInit401Error1 | ApiV1UploadMultipartInit403Error1 |
                ApiV1UploadMultipartInit404Error1 | ApiV1UploadMultipartInit429Error1 |
                ApiV1UploadMultipartInit500Error1 | ApiV1UploadMultipartInit502Error1 |
                ApiV1UploadMultipartInit503Error1 | ApiV1UploadMultipartInit504Error1 | RawError``."""
        return unwrap(self._with_raw_response.upload_init_multipart_upload(body=body, request_options=request_options))

    def upload_sign_multipart_parts(
        self,
        *,
        body: ApiV1UploadMultipartSignRequest | ApiV1UploadMultipartSignRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1UploadMultipartSignResponse:
        """Issue fresh presigned URLs for parts whose original URLs expired mid-upload. Parts already uploaded keep
        their ETags — only re-upload the ones that failed.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1UploadMultipartSign400Error1 |
                ApiV1UploadMultipartSign401Error1 | ApiV1UploadMultipartSign403Error1 |
                ApiV1UploadMultipartSign404Error1 | ApiV1UploadMultipartSign429Error1 |
                ApiV1UploadMultipartSign500Error1 | ApiV1UploadMultipartSign502Error1 |
                ApiV1UploadMultipartSign503Error1 | ApiV1UploadMultipartSign504Error1 | RawError``."""
        return unwrap(self._with_raw_response.upload_sign_multipart_parts(body=body, request_options=request_options))

    @property
    def with_raw_response(self) -> UploadApiWithRawResponse:
        return self._with_raw_response


class AsyncUploadApi:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncUploadApiWithRawResponse(client, server, auth)

    async def upload_abort_multipart_upload(
        self,
        *,
        body: ApiV1UploadMultipartAbortRequest | ApiV1UploadMultipartAbortRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1UploadMultipartAbortResponse:
        """Discard an unfinished multipart upload and its parts. Call this when you give up on an upload — abandoned
        parts stay in storage and count against your usage.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1UploadMultipartAbort400Error1 |
                ApiV1UploadMultipartAbort401Error1 | ApiV1UploadMultipartAbort403Error1 |
                ApiV1UploadMultipartAbort404Error1 | ApiV1UploadMultipartAbort429Error1 |
                ApiV1UploadMultipartAbort500Error1 | ApiV1UploadMultipartAbort502Error1 |
                ApiV1UploadMultipartAbort503Error1 | ApiV1UploadMultipartAbort504Error1 | RawError``."""
        return unwrap(
            await self._with_raw_response.upload_abort_multipart_upload(body=body, request_options=request_options)
        )

    async def upload_complete_multipart_upload(
        self,
        *,
        body: ApiV1UploadMultipartCompleteRequest | ApiV1UploadMultipartCompleteRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1UploadMultipartCompleteResponse:
        """Assemble the uploaded parts into the final object and add it to your media library. Send every part with the
        ETag returned by its PUT. A 500 is always retryable — whatever we have (your parts, or the assembled object) is
        kept, so retry this call rather than re-uploading. A 400 is final: either the part list was wrong, or the file
        itself was rejected (empty, wrong type, too large, no readable preview) and its bytes have been deleted. A 403
        means quota or permissions and is raised before assembly, so your parts are still open — call abort yourself.
        Calling this again after it already succeeded returns the same upload instead of charging you twice.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1UploadMultipartComplete400Error1 |
                ApiV1UploadMultipartComplete401Error1 | ApiV1UploadMultipartComplete403Error1 |
                ApiV1UploadMultipartComplete404Error1 | ApiV1UploadMultipartComplete429Error1 |
                ApiV1UploadMultipartComplete500Error1 | ApiV1UploadMultipartComplete502Error1 |
                ApiV1UploadMultipartComplete503Error1 | ApiV1UploadMultipartComplete504Error1 | RawError``."""
        return unwrap(
            await self._with_raw_response.upload_complete_multipart_upload(body=body, request_options=request_options)
        )

    async def upload_create(
        self,
        *,
        team_id: str | None = None,
        file: AsyncFileInput | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1UploadResponse1:
        """Upload a file. This is the only endpoint that uses multipart/form-data.

        Args:
            team_id: Value sent with the request.
            file: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1Upload400Error1 | ApiV1Upload401Error1 |
                ApiV1Upload403Error1 | ApiV1Upload404Error1 | ApiV1Upload429Error1 | ApiV1Upload500Error1 |
                ApiV1Upload502Error1 | ApiV1Upload503Error1 | ApiV1Upload504Error1 | RawError``."""
        return unwrap(
            await self._with_raw_response.upload_create(team_id=team_id, file=file, request_options=request_options)
        )

    async def upload_create_from_url(
        self,
        *,
        body: ApiV1UploadFromUrlRequest | ApiV1UploadFromUrlRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1UploadFromUrlResponse:
        """Add an image or video to your media library by giving bundle.social a public URL to fetch, instead of
        uploading the bytes yourself. Useful when your media already lives in a CDN or S3 bucket.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1UploadFromUrl400Error1 |
                ApiV1UploadFromUrl401Error1 | ApiV1UploadFromUrl403Error1 | ApiV1UploadFromUrl404Error1 |
                ApiV1UploadFromUrl429Error1 | ApiV1UploadFromUrl500Error1 | ApiV1UploadFromUrl502Error1 |
                ApiV1UploadFromUrl503Error1 | ApiV1UploadFromUrl504Error1 | RawError``."""
        return unwrap(await self._with_raw_response.upload_create_from_url(body=body, request_options=request_options))

    async def upload_delete(
        self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiV1UploadResponse1:
        """Permanently delete a single media file from your library. Files still attached to scheduled posts should be
        replaced first.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1Upload400Error1 | ApiV1Upload401Error1 |
                ApiV1Upload403Error1 | ApiV1Upload404Error1 | ApiV1Upload429Error1 | ApiV1Upload500Error1 |
                ApiV1Upload502Error1 | ApiV1Upload503Error1 | ApiV1Upload504Error1 | RawError``."""
        return unwrap(await self._with_raw_response.upload_delete(id_, request_options=request_options))

    async def upload_delete_many(
        self,
        *,
        body: ApiV1UploadRequest | ApiV1UploadRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> list[ApiV1UploadResponse1]:
        """Permanently delete several media files in one request. Use it to clean up your library in bulk instead of
        calling delete per file.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1Upload400Error1 | ApiV1Upload401Error1 |
                ApiV1Upload403Error1 | ApiV1Upload404Error1 | ApiV1Upload429Error1 | ApiV1Upload500Error1 |
                ApiV1Upload502Error1 | ApiV1Upload503Error1 | ApiV1Upload504Error1 | RawError``."""
        return unwrap(await self._with_raw_response.upload_delete_many(body=body, request_options=request_options))

    async def upload_finalize_large_upload(
        self,
        *,
        body: ApiV1UploadFinalizeRequest | ApiV1UploadFinalizeRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1UploadFinalizeResponse:
        """Finalize large upload.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1UploadFinalize400Error1 |
                ApiV1UploadFinalize401Error1 | ApiV1UploadFinalize403Error1 | ApiV1UploadFinalize404Error1 |
                ApiV1UploadFinalize429Error1 | ApiV1UploadFinalize500Error1 | ApiV1UploadFinalize502Error1 |
                ApiV1UploadFinalize503Error1 | ApiV1UploadFinalize504Error1 | RawError``."""
        return unwrap(
            await self._with_raw_response.upload_finalize_large_upload(body=body, request_options=request_options)
        )

    async def upload_get(
        self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiV1UploadResponse:
        """Retrieve a single media file with its processing status, dimensions, duration, and the posts it is attached
        to.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1Upload400Error1 | ApiV1Upload401Error1 |
                ApiV1Upload403Error1 | ApiV1Upload404Error1 | ApiV1Upload429Error1 | ApiV1Upload500Error1 |
                ApiV1Upload502Error1 | ApiV1Upload503Error1 | ApiV1Upload504Error1 | RawError``."""
        return unwrap(await self._with_raw_response.upload_get(id_, request_options=request_options))

    async def upload_get_list(
        self,
        *,
        team_id: str | None = None,
        type_: TypeBundleSocialUploadApiOrStr | None = None,
        types: list[TypeBundleSocialUploadApiOrStr] | None = None,
        status: StatusBundleSocialUploadApiOrStr | None = None,
        ids: list[str] | None = None,
        urls: list[str] | None = None,
        limit: int | None = None,
        include_posts: IncludePosts2 | IncludePosts2Dict | None = None,
        offset: int | None = 0,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> list[ApiV1UploadResponse]:
        """List the media files in your team's library, newest first. Each file carries ``posts``, the links to the
        posts using it — pass ``includePosts=false`` to leave them out. Page with ``limit`` and ``offset``. To check
        whether specific files already exist, filter by ``ids`` or ``urls`` instead of listing everything.

        Args:
            team_id: Value sent with the request.
            type_: Value sent with the request.
            types: Value sent with the request.
            status: Value sent with the request.
            ids: Value sent with the request.
            urls: Value sent with the request.
            limit: Value sent with the request.
            include_posts: Value sent with the request.
            offset: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1Upload400Error1 | ApiV1Upload401Error1 |
                ApiV1Upload403Error1 | ApiV1Upload404Error1 | ApiV1Upload429Error1 | ApiV1Upload500Error1 |
                ApiV1Upload502Error1 | ApiV1Upload503Error1 | ApiV1Upload504Error1 | RawError``."""
        return unwrap(
            await self._with_raw_response.upload_get_list(
                team_id=team_id,
                type_=type_,
                types=types,
                status=status,
                ids=ids,
                urls=urls,
                limit=limit,
                include_posts=include_posts,
                offset=offset,
                request_options=request_options,
            ),
        )

    async def upload_init_large_upload(
        self,
        *,
        body: ApiV1UploadInitRequest | ApiV1UploadInitRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1UploadInitResponse:
        """Initialize large upload, you need to initialize a large upload if your file is larger than 90 MB.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1UploadInit400Error1 |
                ApiV1UploadInit401Error1 | ApiV1UploadInit403Error1 | ApiV1UploadInit404Error1 |
                ApiV1UploadInit429Error1 | ApiV1UploadInit500Error1 | ApiV1UploadInit502Error1 |
                ApiV1UploadInit503Error1 | ApiV1UploadInit504Error1 | RawError``."""
        return unwrap(
            await self._with_raw_response.upload_init_large_upload(body=body, request_options=request_options)
        )

    async def upload_init_multipart_upload(
        self,
        *,
        body: ApiV1UploadMultipartInitRequest | ApiV1UploadMultipartInitRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1UploadMultipartInitResponse:
        """Start a multipart upload. Required above the 5 GiB single-request storage limit that /upload/init is bound
        by, and allowed for any smaller file too. Returns an uploadId plus one presigned URL per part; PUT each part,
        keep the ETag response header, then call complete with the full part list. Parts are 64 MiB each except the
        last, up to 10000 parts.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1UploadMultipartInit400Error1 |
                ApiV1UploadMultipartInit401Error1 | ApiV1UploadMultipartInit403Error1 |
                ApiV1UploadMultipartInit404Error1 | ApiV1UploadMultipartInit429Error1 |
                ApiV1UploadMultipartInit500Error1 | ApiV1UploadMultipartInit502Error1 |
                ApiV1UploadMultipartInit503Error1 | ApiV1UploadMultipartInit504Error1 | RawError``."""
        return unwrap(
            await self._with_raw_response.upload_init_multipart_upload(body=body, request_options=request_options)
        )

    async def upload_sign_multipart_parts(
        self,
        *,
        body: ApiV1UploadMultipartSignRequest | ApiV1UploadMultipartSignRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1UploadMultipartSignResponse:
        """Issue fresh presigned URLs for parts whose original URLs expired mid-upload. Parts already uploaded keep
        their ETags — only re-upload the ones that failed.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1UploadMultipartSign400Error1 |
                ApiV1UploadMultipartSign401Error1 | ApiV1UploadMultipartSign403Error1 |
                ApiV1UploadMultipartSign404Error1 | ApiV1UploadMultipartSign429Error1 |
                ApiV1UploadMultipartSign500Error1 | ApiV1UploadMultipartSign502Error1 |
                ApiV1UploadMultipartSign503Error1 | ApiV1UploadMultipartSign504Error1 | RawError``."""
        return unwrap(
            await self._with_raw_response.upload_sign_multipart_parts(body=body, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> AsyncUploadApiWithRawResponse:
        return self._with_raw_response


class UploadApiWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def upload_abort_multipart_upload(
        self,
        *,
        body: ApiV1UploadMultipartAbortRequest | ApiV1UploadMultipartAbortRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1UploadMultipartAbortResponse, UploadAbortMultipartUploadErrorBody]:
        """Discard an unfinished multipart upload and its parts. Call this when you give up on an upload — abandoned
        parts stay in storage and count against your usage.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/upload/multipart/abort"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1UploadMultipartAbortRequest | ApiV1UploadMultipartAbortRequestDict | None](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[ApiV1UploadMultipartAbortResponse],
            error_mapper=upload_abort_multipart_upload_error_mapper,
            request_options=request_options,
        )

    def upload_complete_multipart_upload(
        self,
        *,
        body: ApiV1UploadMultipartCompleteRequest | ApiV1UploadMultipartCompleteRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1UploadMultipartCompleteResponse, UploadCompleteMultipartUploadErrorBody]:
        """Assemble the uploaded parts into the final object and add it to your media library. Send every part with the
        ETag returned by its PUT. A 500 is always retryable — whatever we have (your parts, or the assembled object) is
        kept, so retry this call rather than re-uploading. A 400 is final: either the part list was wrong, or the file
        itself was rejected (empty, wrong type, too large, no readable preview) and its bytes have been deleted. A 403
        means quota or permissions and is raised before assembly, so your parts are still open — call abort yourself.
        Calling this again after it already succeeded returns the same upload instead of charging you twice.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/upload/multipart/complete"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1UploadMultipartCompleteRequest | ApiV1UploadMultipartCompleteRequestDict | None](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[ApiV1UploadMultipartCompleteResponse],
            error_mapper=upload_complete_multipart_upload_error_mapper,
            request_options=request_options,
        )

    def upload_create(
        self,
        *,
        team_id: str | None = None,
        file: FileInput | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1UploadResponse1, UploadCreateErrorBody]:
        """Upload a file. This is the only endpoint that uses multipart/form-data.

        Args:
            team_id: Value sent with the request.
            file: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/upload/"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=multipart_body(
                param[str | None]("teamId", team_id), file_part("file", file) if file is not None else None
            ),
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[ApiV1UploadResponse1],
            error_mapper=upload_create_error_mapper,
            request_options=request_options,
        )

    def upload_create_from_url(
        self,
        *,
        body: ApiV1UploadFromUrlRequest | ApiV1UploadFromUrlRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1UploadFromUrlResponse, UploadCreateFromUrlErrorBody]:
        """Add an image or video to your media library by giving bundle.social a public URL to fetch, instead of
        uploading the bytes yourself. Useful when your media already lives in a CDN or S3 bucket.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/upload/from-url"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1UploadFromUrlRequest | ApiV1UploadFromUrlRequestDict | None](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[ApiV1UploadFromUrlResponse],
            error_mapper=upload_create_from_url_error_mapper,
            request_options=request_options,
        )

    def upload_delete(
        self, id_: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1UploadResponse1, UploadDeleteErrorBody]:
        """Permanently delete a single media file from your library. Files still attached to scheduled posts should be
        replaced first.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/api/v1/upload/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[ApiV1UploadResponse1],
            error_mapper=upload_delete_error_mapper,
            request_options=request_options,
        )

    def upload_delete_many(
        self,
        *,
        body: ApiV1UploadRequest | ApiV1UploadRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[list[ApiV1UploadResponse1], UploadDeleteManyErrorBody]:
        """Permanently delete several media files in one request. Use it to clean up your library in bulk instead of
        calling delete per file.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/api/v1/upload/"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1UploadRequest | ApiV1UploadRequestDict | None](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[list[ApiV1UploadResponse1]],
            error_mapper=upload_delete_many_error_mapper,
            request_options=request_options,
        )

    def upload_finalize_large_upload(
        self,
        *,
        body: ApiV1UploadFinalizeRequest | ApiV1UploadFinalizeRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1UploadFinalizeResponse, UploadFinalizeLargeUploadErrorBody]:
        """Finalize large upload.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/upload/finalize"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1UploadFinalizeRequest | ApiV1UploadFinalizeRequestDict | None](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[ApiV1UploadFinalizeResponse],
            error_mapper=upload_finalize_large_upload_error_mapper,
            request_options=request_options,
        )

    def upload_get(
        self, id_: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1UploadResponse, UploadGetErrorBody]:
        """Retrieve a single media file with its processing status, dimensions, duration, and the posts it is attached
        to.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/upload/{id}"),
            path_params=[param[str]("id", id_)],
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[ApiV1UploadResponse],
            error_mapper=upload_get_error_mapper,
            request_options=request_options,
        )

    def upload_get_list(
        self,
        *,
        team_id: str | None = None,
        type_: TypeBundleSocialUploadApiOrStr | None = None,
        types: list[TypeBundleSocialUploadApiOrStr] | None = None,
        status: StatusBundleSocialUploadApiOrStr | None = None,
        ids: list[str] | None = None,
        urls: list[str] | None = None,
        limit: int | None = None,
        include_posts: IncludePosts2 | IncludePosts2Dict | None = None,
        offset: int | None = 0,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[list[ApiV1UploadResponse], UploadGetListErrorBody]:
        """List the media files in your team's library, newest first. Each file carries ``posts``, the links to the
        posts using it — pass ``includePosts=false`` to leave them out. Page with ``limit`` and ``offset``. To check
        whether specific files already exist, filter by ``ids`` or ``urls`` instead of listing everything.

        Args:
            team_id: Value sent with the request.
            type_: Value sent with the request.
            types: Value sent with the request.
            status: Value sent with the request.
            ids: Value sent with the request.
            urls: Value sent with the request.
            limit: Value sent with the request.
            include_posts: Value sent with the request.
            offset: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/upload/"),
            query_params=[
                param[str | None]("teamId", team_id),
                param[TypeBundleSocialUploadApiOrStr | None]("type", type_),
                param[list[TypeBundleSocialUploadApiOrStr] | None]("types", types),
                param[StatusBundleSocialUploadApiOrStr | None]("status", status),
                param[list[str] | None]("ids", ids),
                param[list[str] | None]("urls", urls),
                param[int | None]("limit", limit),
                param[IncludePosts2 | IncludePosts2Dict | None]("includePosts", include_posts),
                param[int | None]("offset", offset),
            ],
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[list[ApiV1UploadResponse]],
            error_mapper=upload_get_list_error_mapper,
            request_options=request_options,
        )

    def upload_init_large_upload(
        self,
        *,
        body: ApiV1UploadInitRequest | ApiV1UploadInitRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1UploadInitResponse, UploadInitLargeUploadErrorBody]:
        """Initialize large upload, you need to initialize a large upload if your file is larger than 90 MB.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/upload/init"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1UploadInitRequest | ApiV1UploadInitRequestDict | None](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[ApiV1UploadInitResponse],
            error_mapper=upload_init_large_upload_error_mapper,
            request_options=request_options,
        )

    def upload_init_multipart_upload(
        self,
        *,
        body: ApiV1UploadMultipartInitRequest | ApiV1UploadMultipartInitRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1UploadMultipartInitResponse, UploadInitMultipartUploadErrorBody]:
        """Start a multipart upload. Required above the 5 GiB single-request storage limit that /upload/init is bound
        by, and allowed for any smaller file too. Returns an uploadId plus one presigned URL per part; PUT each part,
        keep the ETag response header, then call complete with the full part list. Parts are 64 MiB each except the
        last, up to 10000 parts.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/upload/multipart/init"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1UploadMultipartInitRequest | ApiV1UploadMultipartInitRequestDict | None](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[ApiV1UploadMultipartInitResponse],
            error_mapper=upload_init_multipart_upload_error_mapper,
            request_options=request_options,
        )

    def upload_sign_multipart_parts(
        self,
        *,
        body: ApiV1UploadMultipartSignRequest | ApiV1UploadMultipartSignRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1UploadMultipartSignResponse, UploadSignMultipartPartsErrorBody]:
        """Issue fresh presigned URLs for parts whose original URLs expired mid-upload. Parts already uploaded keep
        their ETags — only re-upload the ones that failed.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/upload/multipart/sign"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1UploadMultipartSignRequest | ApiV1UploadMultipartSignRequestDict | None](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[ApiV1UploadMultipartSignResponse],
            error_mapper=upload_sign_multipart_parts_error_mapper,
            request_options=request_options,
        )


class AsyncUploadApiWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def upload_abort_multipart_upload(
        self,
        *,
        body: ApiV1UploadMultipartAbortRequest | ApiV1UploadMultipartAbortRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1UploadMultipartAbortResponse, UploadAbortMultipartUploadErrorBody]:
        """Discard an unfinished multipart upload and its parts. Call this when you give up on an upload — abandoned
        parts stay in storage and count against your usage.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/upload/multipart/abort"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1UploadMultipartAbortRequest | ApiV1UploadMultipartAbortRequestDict | None](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[ApiV1UploadMultipartAbortResponse],
            error_mapper=upload_abort_multipart_upload_error_mapper,
            request_options=request_options,
        )

    async def upload_complete_multipart_upload(
        self,
        *,
        body: ApiV1UploadMultipartCompleteRequest | ApiV1UploadMultipartCompleteRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1UploadMultipartCompleteResponse, UploadCompleteMultipartUploadErrorBody]:
        """Assemble the uploaded parts into the final object and add it to your media library. Send every part with the
        ETag returned by its PUT. A 500 is always retryable — whatever we have (your parts, or the assembled object) is
        kept, so retry this call rather than re-uploading. A 400 is final: either the part list was wrong, or the file
        itself was rejected (empty, wrong type, too large, no readable preview) and its bytes have been deleted. A 403
        means quota or permissions and is raised before assembly, so your parts are still open — call abort yourself.
        Calling this again after it already succeeded returns the same upload instead of charging you twice.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/upload/multipart/complete"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1UploadMultipartCompleteRequest | ApiV1UploadMultipartCompleteRequestDict | None](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[ApiV1UploadMultipartCompleteResponse],
            error_mapper=upload_complete_multipart_upload_error_mapper,
            request_options=request_options,
        )

    async def upload_create(
        self,
        *,
        team_id: str | None = None,
        file: AsyncFileInput | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1UploadResponse1, UploadCreateErrorBody]:
        """Upload a file. This is the only endpoint that uses multipart/form-data.

        Args:
            team_id: Value sent with the request.
            file: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/upload/"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=multipart_body(
                param[str | None]("teamId", team_id), file_part("file", file) if file is not None else None
            ),
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[ApiV1UploadResponse1],
            error_mapper=upload_create_error_mapper,
            request_options=request_options,
        )

    async def upload_create_from_url(
        self,
        *,
        body: ApiV1UploadFromUrlRequest | ApiV1UploadFromUrlRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1UploadFromUrlResponse, UploadCreateFromUrlErrorBody]:
        """Add an image or video to your media library by giving bundle.social a public URL to fetch, instead of
        uploading the bytes yourself. Useful when your media already lives in a CDN or S3 bucket.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/upload/from-url"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1UploadFromUrlRequest | ApiV1UploadFromUrlRequestDict | None](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[ApiV1UploadFromUrlResponse],
            error_mapper=upload_create_from_url_error_mapper,
            request_options=request_options,
        )

    async def upload_delete(
        self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1UploadResponse1, UploadDeleteErrorBody]:
        """Permanently delete a single media file from your library. Files still attached to scheduled posts should be
        replaced first.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/api/v1/upload/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[ApiV1UploadResponse1],
            error_mapper=upload_delete_error_mapper,
            request_options=request_options,
        )

    async def upload_delete_many(
        self,
        *,
        body: ApiV1UploadRequest | ApiV1UploadRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[list[ApiV1UploadResponse1], UploadDeleteManyErrorBody]:
        """Permanently delete several media files in one request. Use it to clean up your library in bulk instead of
        calling delete per file.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/api/v1/upload/"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1UploadRequest | ApiV1UploadRequestDict | None](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[list[ApiV1UploadResponse1]],
            error_mapper=upload_delete_many_error_mapper,
            request_options=request_options,
        )

    async def upload_finalize_large_upload(
        self,
        *,
        body: ApiV1UploadFinalizeRequest | ApiV1UploadFinalizeRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1UploadFinalizeResponse, UploadFinalizeLargeUploadErrorBody]:
        """Finalize large upload.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/upload/finalize"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1UploadFinalizeRequest | ApiV1UploadFinalizeRequestDict | None](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[ApiV1UploadFinalizeResponse],
            error_mapper=upload_finalize_large_upload_error_mapper,
            request_options=request_options,
        )

    async def upload_get(
        self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1UploadResponse, UploadGetErrorBody]:
        """Retrieve a single media file with its processing status, dimensions, duration, and the posts it is attached
        to.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/upload/{id}"),
            path_params=[param[str]("id", id_)],
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[ApiV1UploadResponse],
            error_mapper=upload_get_error_mapper,
            request_options=request_options,
        )

    async def upload_get_list(
        self,
        *,
        team_id: str | None = None,
        type_: TypeBundleSocialUploadApiOrStr | None = None,
        types: list[TypeBundleSocialUploadApiOrStr] | None = None,
        status: StatusBundleSocialUploadApiOrStr | None = None,
        ids: list[str] | None = None,
        urls: list[str] | None = None,
        limit: int | None = None,
        include_posts: IncludePosts2 | IncludePosts2Dict | None = None,
        offset: int | None = 0,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[list[ApiV1UploadResponse], UploadGetListErrorBody]:
        """List the media files in your team's library, newest first. Each file carries ``posts``, the links to the
        posts using it — pass ``includePosts=false`` to leave them out. Page with ``limit`` and ``offset``. To check
        whether specific files already exist, filter by ``ids`` or ``urls`` instead of listing everything.

        Args:
            team_id: Value sent with the request.
            type_: Value sent with the request.
            types: Value sent with the request.
            status: Value sent with the request.
            ids: Value sent with the request.
            urls: Value sent with the request.
            limit: Value sent with the request.
            include_posts: Value sent with the request.
            offset: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/upload/"),
            query_params=[
                param[str | None]("teamId", team_id),
                param[TypeBundleSocialUploadApiOrStr | None]("type", type_),
                param[list[TypeBundleSocialUploadApiOrStr] | None]("types", types),
                param[StatusBundleSocialUploadApiOrStr | None]("status", status),
                param[list[str] | None]("ids", ids),
                param[list[str] | None]("urls", urls),
                param[int | None]("limit", limit),
                param[IncludePosts2 | IncludePosts2Dict | None]("includePosts", include_posts),
                param[int | None]("offset", offset),
            ],
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[list[ApiV1UploadResponse]],
            error_mapper=upload_get_list_error_mapper,
            request_options=request_options,
        )

    async def upload_init_large_upload(
        self,
        *,
        body: ApiV1UploadInitRequest | ApiV1UploadInitRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1UploadInitResponse, UploadInitLargeUploadErrorBody]:
        """Initialize large upload, you need to initialize a large upload if your file is larger than 90 MB.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/upload/init"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1UploadInitRequest | ApiV1UploadInitRequestDict | None](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[ApiV1UploadInitResponse],
            error_mapper=upload_init_large_upload_error_mapper,
            request_options=request_options,
        )

    async def upload_init_multipart_upload(
        self,
        *,
        body: ApiV1UploadMultipartInitRequest | ApiV1UploadMultipartInitRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1UploadMultipartInitResponse, UploadInitMultipartUploadErrorBody]:
        """Start a multipart upload. Required above the 5 GiB single-request storage limit that /upload/init is bound
        by, and allowed for any smaller file too. Returns an uploadId plus one presigned URL per part; PUT each part,
        keep the ETag response header, then call complete with the full part list. Parts are 64 MiB each except the
        last, up to 10000 parts.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/upload/multipart/init"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1UploadMultipartInitRequest | ApiV1UploadMultipartInitRequestDict | None](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[ApiV1UploadMultipartInitResponse],
            error_mapper=upload_init_multipart_upload_error_mapper,
            request_options=request_options,
        )

    async def upload_sign_multipart_parts(
        self,
        *,
        body: ApiV1UploadMultipartSignRequest | ApiV1UploadMultipartSignRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1UploadMultipartSignResponse, UploadSignMultipartPartsErrorBody]:
        """Issue fresh presigned URLs for parts whose original URLs expired mid-upload. Parts already uploaded keep
        their ETags — only re-upload the ones that failed.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/upload/multipart/sign"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1UploadMultipartSignRequest | ApiV1UploadMultipartSignRequestDict | None](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[ApiV1UploadMultipartSignResponse],
            error_mapper=upload_sign_multipart_parts_error_mapper,
            request_options=request_options,
        )
