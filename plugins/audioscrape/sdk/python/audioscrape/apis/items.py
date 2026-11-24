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
from ..errors.get_item_error import GetItemErrorBody, get_item_error_mapper
from ..errors.get_item_transcript_error import GetItemTranscriptErrorBody, get_item_transcript_error_mapper
from ..errors.list_items_error import ListItemsErrorBody, list_items_error_mapper
from ..errors.upload_item_external_error import UploadItemExternalErrorBody, upload_item_external_error_mapper
from ..models.episode_detail import EpisodeDetail
from ..models.item_list import ItemList
from ..models.transcript import Transcript
from ..models.upload_from_url import UploadFromUrl, UploadFromUrlDict
from ..models.upload_response import UploadResponse
from ..server.server import Server


class Items:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = ItemsWithRawResponse(client, server, auth)

    def get_item(
        self, item_id: str, *, include: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> EpisodeDetail:
        """Returns one item — podcast episode, upload, or any other source type. Heavy fields (transcript, entities) are
        opt-in via ``?include=``. Equivalent to ``GET /api/episodes/{id}`` for podcast episodes, but works uniformly
        across all content types.

        Args:
            item_id: Numeric item ID (works for any source_type)
            include: Comma-separated optional fields: ``transcript``, ``entities``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Item + parent podcast (when applicable), plus requested optional fields

        Raises:
            ApiError: Missing or invalid API key No active subscription (paid endpoint requires a subscription) Endpoint
                not available on the caller's plan Item not found Monthly quota exhausted (response includes ``usage: {
                current, limit }``) ``error`` is ``ApiErrorBody | RawError``."""
        return unwrap(self._with_raw_response.get_item(item_id, include=include, request_options=request_options))

    def get_item_transcript(self, item_id: str, *, request_options: RequestOptionsOrDict | None = None) -> Transcript:
        """Returns the transcript on its own — segments + speaker list — for any item, regardless of source type.

        Args:
            item_id: Numeric item ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Transcript segments + speaker list

        Raises:
            ApiError: Missing or invalid API key No active subscription (paid endpoint requires a subscription) Endpoint
                not available on the caller's plan Item not found or has no transcript Monthly quota exhausted (response
                includes ``usage: { current, limit }``) ``error`` is ``ApiErrorBody | RawError``."""
        return unwrap(self._with_raw_response.get_item_transcript(item_id, request_options=request_options))

    def list_items(
        self,
        *,
        source_type: str | None = None,
        dataset_id: int | None = None,
        library: str | None = None,
        limit: int | None = None,
        offset: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ItemList:
        """Universal listing across content types — podcast episodes, uploads, and future formats. Filter by
        ``source_type``, ``dataset_id``, or ``library`` (slug). Results are newest-first. Use this in place of
        ``/api/episodes`` when your integration needs to work with multiple content types.

        Args:
            source_type: Filter by source type (``podcast_episode``, ``upload``, ``youtube``, ...). Omit for all types.
            dataset_id: Restrict to items in a specific dataset
            library: Restrict to items in a specific library (by slug)
            limit: Max results (default 20, max 100)
            offset: Result offset for pagination
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Items ordered by publish date descending

        Raises:
            ApiError: Missing or invalid API key No active subscription (paid endpoint requires a subscription) Endpoint
                not available on the caller's plan Monthly quota exhausted (response includes ``usage: { current, limit
                }``) ``error`` is ``ApiErrorBody | RawError``."""
        return unwrap(
            self._with_raw_response.list_items(
                source_type=source_type,
                dataset_id=dataset_id,
                library=library,
                limit=limit,
                offset=offset,
                request_options=request_options,
            ),
        )

    def upload_item_external(
        self, id_: int, body: UploadFromUrl | UploadFromUrlDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> UploadResponse:
        """Two intake modes: • ``Content-Type: multipart/form-data`` — form fields ``audio`` (file), optional ``title``,
        ``description`` • ``Content-Type: application/json`` — ``{ "audio_url": "https://...", "title": "...",
        "description": "..." }``

        JSON mode is the natural fit when the audio is already hosted (S3 presigned URL, CDN, your own server).
        Multipart is the natural fit for client-side files (browser uploads, scripts streaming local files). Both modes
        converge on the same storage + transcription pipeline; the resulting item is identical. Transcription minutes
        consumed count against your plan's monthly quota (see ``/api/me/usage``). After upload, fetch full metadata at
        ``GET /api/items/{item_id}`` once transcription completes.

        ## Constraints

        • **File size:** Free tier is hard-capped at **400 MB** per audio upload regardless of dataset config (**1 GB**
        for video and for containers intake re-wraps — amr, 3gp, wma, aiff, caf, mpeg — since only the extracted audio
        is kept). Paid plans honour the dataset's ``max_file_size_mb`` (default 500 MB). Exceeding the cap returns ``413
        Payload Too Large``; JSON-mode ``audio_url`` is fetched under the same cap. (The MCP connector's
        ``transcribe_audio`` link path and the web paste-a-link import fetch in the pipeline without a byte cap.) •
        **URL-fetch safety (JSON mode):** ``audio_url`` must use ``https://``. URLs that resolve to private, link-local,
        loopback, or otherwise internal IP ranges are rejected (SSRF guard) with ``422 Unprocessable Entity``. •
        **Dataset configuration:** The target dataset must have ``content_type = 'uploads'``. Datasets backed by RSS
        feeds or other source types return ``409 Conflict``.

        Args:
            id_: Numeric dataset ID. Caller must be a member of the dataset's parent library.
            body: **This endpoint accepts TWO content types — pick one based on where the audio lives:** 1.
                **``application/json``** (documented schema below) — body shape ``{ "audio_url": "https://...", "title":
                "...", "description": "..." }``. Use this when the audio is already hosted at a public HTTPS URL. 2.
                **``multipart/form-data``** (NOT shown in the schema above — utoipa can only render one content type per
                operation, but the server accepts both). Send a multipart body with these parts: ``audio`` (the audio
                file, required), ``title`` (text, optional), ``description`` (text, optional). Use this for direct file
                uploads from a browser or local script. Both content types hit the same handler, write to the same
                storage, and produce the same ``item_id``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Upload accepted; item created and queued for transcription

        Raises:
            ApiError: Validation error — bad URL, missing required multipart field, etc. (``code: VALIDATION_ERROR``)
                Missing or invalid API key Dataset not found, or caller is not a member of the parent library (returned
                identically to avoid leaking existence) Dataset exists but is not configured for uploads (``content_type
                != 'uploads'``) Uploaded / fetched file exceeds the per-upload size cap. Free tier is hard-capped at 400
                MB; paid plans use the dataset's ``max_file_size_mb`` (default 500 MB). Unsupported audio format, or
                Content-Type is neither ``multipart/form-data`` nor ``application/json`` ``audio_url`` is syntactically
                valid but unprocessable: DNS failure, non-2xx response, or resolves to a forbidden internal address
                (SSRF guard) ``error`` is ``ApiErrorBody | RawError``."""
        return unwrap(self._with_raw_response.upload_item_external(id_, body, request_options=request_options))

    @property
    def with_raw_response(self) -> ItemsWithRawResponse:
        return self._with_raw_response


class AsyncItems:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncItemsWithRawResponse(client, server, auth)

    async def get_item(
        self, item_id: str, *, include: str | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> EpisodeDetail:
        """Returns one item — podcast episode, upload, or any other source type. Heavy fields (transcript, entities) are
        opt-in via ``?include=``. Equivalent to ``GET /api/episodes/{id}`` for podcast episodes, but works uniformly
        across all content types.

        Args:
            item_id: Numeric item ID (works for any source_type)
            include: Comma-separated optional fields: ``transcript``, ``entities``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Item + parent podcast (when applicable), plus requested optional fields

        Raises:
            ApiError: Missing or invalid API key No active subscription (paid endpoint requires a subscription) Endpoint
                not available on the caller's plan Item not found Monthly quota exhausted (response includes ``usage: {
                current, limit }``) ``error`` is ``ApiErrorBody | RawError``."""
        return unwrap(await self._with_raw_response.get_item(item_id, include=include, request_options=request_options))

    async def get_item_transcript(
        self, item_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> Transcript:
        """Returns the transcript on its own — segments + speaker list — for any item, regardless of source type.

        Args:
            item_id: Numeric item ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Transcript segments + speaker list

        Raises:
            ApiError: Missing or invalid API key No active subscription (paid endpoint requires a subscription) Endpoint
                not available on the caller's plan Item not found or has no transcript Monthly quota exhausted (response
                includes ``usage: { current, limit }``) ``error`` is ``ApiErrorBody | RawError``."""
        return unwrap(await self._with_raw_response.get_item_transcript(item_id, request_options=request_options))

    async def list_items(
        self,
        *,
        source_type: str | None = None,
        dataset_id: int | None = None,
        library: str | None = None,
        limit: int | None = None,
        offset: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ItemList:
        """Universal listing across content types — podcast episodes, uploads, and future formats. Filter by
        ``source_type``, ``dataset_id``, or ``library`` (slug). Results are newest-first. Use this in place of
        ``/api/episodes`` when your integration needs to work with multiple content types.

        Args:
            source_type: Filter by source type (``podcast_episode``, ``upload``, ``youtube``, ...). Omit for all types.
            dataset_id: Restrict to items in a specific dataset
            library: Restrict to items in a specific library (by slug)
            limit: Max results (default 20, max 100)
            offset: Result offset for pagination
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Items ordered by publish date descending

        Raises:
            ApiError: Missing or invalid API key No active subscription (paid endpoint requires a subscription) Endpoint
                not available on the caller's plan Monthly quota exhausted (response includes ``usage: { current, limit
                }``) ``error`` is ``ApiErrorBody | RawError``."""
        return unwrap(
            await self._with_raw_response.list_items(
                source_type=source_type,
                dataset_id=dataset_id,
                library=library,
                limit=limit,
                offset=offset,
                request_options=request_options,
            ),
        )

    async def upload_item_external(
        self,
        id_: int,
        body: UploadFromUrl | UploadFromUrlDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> UploadResponse:
        """Two intake modes: • ``Content-Type: multipart/form-data`` — form fields ``audio`` (file), optional ``title``,
        ``description`` • ``Content-Type: application/json`` — ``{ "audio_url": "https://...", "title": "...",
        "description": "..." }``

        JSON mode is the natural fit when the audio is already hosted (S3 presigned URL, CDN, your own server).
        Multipart is the natural fit for client-side files (browser uploads, scripts streaming local files). Both modes
        converge on the same storage + transcription pipeline; the resulting item is identical. Transcription minutes
        consumed count against your plan's monthly quota (see ``/api/me/usage``). After upload, fetch full metadata at
        ``GET /api/items/{item_id}`` once transcription completes.

        ## Constraints

        • **File size:** Free tier is hard-capped at **400 MB** per audio upload regardless of dataset config (**1 GB**
        for video and for containers intake re-wraps — amr, 3gp, wma, aiff, caf, mpeg — since only the extracted audio
        is kept). Paid plans honour the dataset's ``max_file_size_mb`` (default 500 MB). Exceeding the cap returns ``413
        Payload Too Large``; JSON-mode ``audio_url`` is fetched under the same cap. (The MCP connector's
        ``transcribe_audio`` link path and the web paste-a-link import fetch in the pipeline without a byte cap.) •
        **URL-fetch safety (JSON mode):** ``audio_url`` must use ``https://``. URLs that resolve to private, link-local,
        loopback, or otherwise internal IP ranges are rejected (SSRF guard) with ``422 Unprocessable Entity``. •
        **Dataset configuration:** The target dataset must have ``content_type = 'uploads'``. Datasets backed by RSS
        feeds or other source types return ``409 Conflict``.

        Args:
            id_: Numeric dataset ID. Caller must be a member of the dataset's parent library.
            body: **This endpoint accepts TWO content types — pick one based on where the audio lives:** 1.
                **``application/json``** (documented schema below) — body shape ``{ "audio_url": "https://...", "title":
                "...", "description": "..." }``. Use this when the audio is already hosted at a public HTTPS URL. 2.
                **``multipart/form-data``** (NOT shown in the schema above — utoipa can only render one content type per
                operation, but the server accepts both). Send a multipart body with these parts: ``audio`` (the audio
                file, required), ``title`` (text, optional), ``description`` (text, optional). Use this for direct file
                uploads from a browser or local script. Both content types hit the same handler, write to the same
                storage, and produce the same ``item_id``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Upload accepted; item created and queued for transcription

        Raises:
            ApiError: Validation error — bad URL, missing required multipart field, etc. (``code: VALIDATION_ERROR``)
                Missing or invalid API key Dataset not found, or caller is not a member of the parent library (returned
                identically to avoid leaking existence) Dataset exists but is not configured for uploads (``content_type
                != 'uploads'``) Uploaded / fetched file exceeds the per-upload size cap. Free tier is hard-capped at 400
                MB; paid plans use the dataset's ``max_file_size_mb`` (default 500 MB). Unsupported audio format, or
                Content-Type is neither ``multipart/form-data`` nor ``application/json`` ``audio_url`` is syntactically
                valid but unprocessable: DNS failure, non-2xx response, or resolves to a forbidden internal address
                (SSRF guard) ``error`` is ``ApiErrorBody | RawError``."""
        return unwrap(await self._with_raw_response.upload_item_external(id_, body, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncItemsWithRawResponse:
        return self._with_raw_response


class ItemsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def get_item(
        self, item_id: str, *, include: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[EpisodeDetail, GetItemErrorBody]:
        """Returns one item — podcast episode, upload, or any other source type. Heavy fields (transcript, entities) are
        opt-in via ``?include=``. Equivalent to ``GET /api/episodes/{id}`` for podcast episodes, but works uniformly
        across all content types.

        Args:
            item_id: Numeric item ID (works for any source_type)
            include: Comma-separated optional fields: ``transcript``, ``entities``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/items/{item_id}"),
            path_params=[param[str]("item_id", item_id)],
            query_params=[param[str | None]("include", include)],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[EpisodeDetail],
            error_mapper=get_item_error_mapper,
            request_options=request_options,
        )

    def get_item_transcript(
        self, item_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Transcript, GetItemTranscriptErrorBody]:
        """Returns the transcript on its own — segments + speaker list — for any item, regardless of source type.

        Args:
            item_id: Numeric item ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/items/{item_id}/transcript"),
            path_params=[param[str]("item_id", item_id)],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[Transcript],
            error_mapper=get_item_transcript_error_mapper,
            request_options=request_options,
        )

    def list_items(
        self,
        *,
        source_type: str | None = None,
        dataset_id: int | None = None,
        library: str | None = None,
        limit: int | None = None,
        offset: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ItemList, ListItemsErrorBody]:
        """Universal listing across content types — podcast episodes, uploads, and future formats. Filter by
        ``source_type``, ``dataset_id``, or ``library`` (slug). Results are newest-first. Use this in place of
        ``/api/episodes`` when your integration needs to work with multiple content types.

        Args:
            source_type: Filter by source type (``podcast_episode``, ``upload``, ``youtube``, ...). Omit for all types.
            dataset_id: Restrict to items in a specific dataset
            library: Restrict to items in a specific library (by slug)
            limit: Max results (default 20, max 100)
            offset: Result offset for pagination
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/items"),
            query_params=[
                param[str | None]("source_type", source_type),
                param[int | None]("dataset_id", dataset_id),
                param[str | None]("library", library),
                param[int | None]("limit", limit),
                param[int | None]("offset", offset),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ItemList],
            error_mapper=list_items_error_mapper,
            request_options=request_options,
        )

    def upload_item_external(
        self, id_: int, body: UploadFromUrl | UploadFromUrlDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[UploadResponse, UploadItemExternalErrorBody]:
        """Two intake modes: • ``Content-Type: multipart/form-data`` — form fields ``audio`` (file), optional ``title``,
        ``description`` • ``Content-Type: application/json`` — ``{ "audio_url": "https://...", "title": "...",
        "description": "..." }``

        JSON mode is the natural fit when the audio is already hosted (S3 presigned URL, CDN, your own server).
        Multipart is the natural fit for client-side files (browser uploads, scripts streaming local files). Both modes
        converge on the same storage + transcription pipeline; the resulting item is identical. Transcription minutes
        consumed count against your plan's monthly quota (see ``/api/me/usage``). After upload, fetch full metadata at
        ``GET /api/items/{item_id}`` once transcription completes.

        ## Constraints

        • **File size:** Free tier is hard-capped at **400 MB** per audio upload regardless of dataset config (**1 GB**
        for video and for containers intake re-wraps — amr, 3gp, wma, aiff, caf, mpeg — since only the extracted audio
        is kept). Paid plans honour the dataset's ``max_file_size_mb`` (default 500 MB). Exceeding the cap returns ``413
        Payload Too Large``; JSON-mode ``audio_url`` is fetched under the same cap. (The MCP connector's
        ``transcribe_audio`` link path and the web paste-a-link import fetch in the pipeline without a byte cap.) •
        **URL-fetch safety (JSON mode):** ``audio_url`` must use ``https://``. URLs that resolve to private, link-local,
        loopback, or otherwise internal IP ranges are rejected (SSRF guard) with ``422 Unprocessable Entity``. •
        **Dataset configuration:** The target dataset must have ``content_type = 'uploads'``. Datasets backed by RSS
        feeds or other source types return ``409 Conflict``.

        Args:
            id_: Numeric dataset ID. Caller must be a member of the dataset's parent library.
            body: **This endpoint accepts TWO content types — pick one based on where the audio lives:** 1.
                **``application/json``** (documented schema below) — body shape ``{ "audio_url": "https://...", "title":
                "...", "description": "..." }``. Use this when the audio is already hosted at a public HTTPS URL. 2.
                **``multipart/form-data``** (NOT shown in the schema above — utoipa can only render one content type per
                operation, but the server accepts both). Send a multipart body with these parts: ``audio`` (the audio
                file, required), ``title`` (text, optional), ``description`` (text, optional). Use this for direct file
                uploads from a browser or local script. Both content types hit the same handler, write to the same
                storage, and produce the same ``item_id``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/datasets/{id}/items"),
            path_params=[param[int]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[UploadFromUrl | UploadFromUrlDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[UploadResponse],
            error_mapper=upload_item_external_error_mapper,
            request_options=request_options,
        )


class AsyncItemsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def get_item(
        self, item_id: str, *, include: str | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[EpisodeDetail, GetItemErrorBody]:
        """Returns one item — podcast episode, upload, or any other source type. Heavy fields (transcript, entities) are
        opt-in via ``?include=``. Equivalent to ``GET /api/episodes/{id}`` for podcast episodes, but works uniformly
        across all content types.

        Args:
            item_id: Numeric item ID (works for any source_type)
            include: Comma-separated optional fields: ``transcript``, ``entities``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/items/{item_id}"),
            path_params=[param[str]("item_id", item_id)],
            query_params=[param[str | None]("include", include)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[EpisodeDetail],
            error_mapper=get_item_error_mapper,
            request_options=request_options,
        )

    async def get_item_transcript(
        self, item_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Transcript, GetItemTranscriptErrorBody]:
        """Returns the transcript on its own — segments + speaker list — for any item, regardless of source type.

        Args:
            item_id: Numeric item ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/items/{item_id}/transcript"),
            path_params=[param[str]("item_id", item_id)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[Transcript],
            error_mapper=get_item_transcript_error_mapper,
            request_options=request_options,
        )

    async def list_items(
        self,
        *,
        source_type: str | None = None,
        dataset_id: int | None = None,
        library: str | None = None,
        limit: int | None = None,
        offset: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ItemList, ListItemsErrorBody]:
        """Universal listing across content types — podcast episodes, uploads, and future formats. Filter by
        ``source_type``, ``dataset_id``, or ``library`` (slug). Results are newest-first. Use this in place of
        ``/api/episodes`` when your integration needs to work with multiple content types.

        Args:
            source_type: Filter by source type (``podcast_episode``, ``upload``, ``youtube``, ...). Omit for all types.
            dataset_id: Restrict to items in a specific dataset
            library: Restrict to items in a specific library (by slug)
            limit: Max results (default 20, max 100)
            offset: Result offset for pagination
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/items"),
            query_params=[
                param[str | None]("source_type", source_type),
                param[int | None]("dataset_id", dataset_id),
                param[str | None]("library", library),
                param[int | None]("limit", limit),
                param[int | None]("offset", offset),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ItemList],
            error_mapper=list_items_error_mapper,
            request_options=request_options,
        )

    async def upload_item_external(
        self,
        id_: int,
        body: UploadFromUrl | UploadFromUrlDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[UploadResponse, UploadItemExternalErrorBody]:
        """Two intake modes: • ``Content-Type: multipart/form-data`` — form fields ``audio`` (file), optional ``title``,
        ``description`` • ``Content-Type: application/json`` — ``{ "audio_url": "https://...", "title": "...",
        "description": "..." }``

        JSON mode is the natural fit when the audio is already hosted (S3 presigned URL, CDN, your own server).
        Multipart is the natural fit for client-side files (browser uploads, scripts streaming local files). Both modes
        converge on the same storage + transcription pipeline; the resulting item is identical. Transcription minutes
        consumed count against your plan's monthly quota (see ``/api/me/usage``). After upload, fetch full metadata at
        ``GET /api/items/{item_id}`` once transcription completes.

        ## Constraints

        • **File size:** Free tier is hard-capped at **400 MB** per audio upload regardless of dataset config (**1 GB**
        for video and for containers intake re-wraps — amr, 3gp, wma, aiff, caf, mpeg — since only the extracted audio
        is kept). Paid plans honour the dataset's ``max_file_size_mb`` (default 500 MB). Exceeding the cap returns ``413
        Payload Too Large``; JSON-mode ``audio_url`` is fetched under the same cap. (The MCP connector's
        ``transcribe_audio`` link path and the web paste-a-link import fetch in the pipeline without a byte cap.) •
        **URL-fetch safety (JSON mode):** ``audio_url`` must use ``https://``. URLs that resolve to private, link-local,
        loopback, or otherwise internal IP ranges are rejected (SSRF guard) with ``422 Unprocessable Entity``. •
        **Dataset configuration:** The target dataset must have ``content_type = 'uploads'``. Datasets backed by RSS
        feeds or other source types return ``409 Conflict``.

        Args:
            id_: Numeric dataset ID. Caller must be a member of the dataset's parent library.
            body: **This endpoint accepts TWO content types — pick one based on where the audio lives:** 1.
                **``application/json``** (documented schema below) — body shape ``{ "audio_url": "https://...", "title":
                "...", "description": "..." }``. Use this when the audio is already hosted at a public HTTPS URL. 2.
                **``multipart/form-data``** (NOT shown in the schema above — utoipa can only render one content type per
                operation, but the server accepts both). Send a multipart body with these parts: ``audio`` (the audio
                file, required), ``title`` (text, optional), ``description`` (text, optional). Use this for direct file
                uploads from a browser or local script. Both content types hit the same handler, write to the same
                storage, and produce the same ``item_id``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/datasets/{id}/items"),
            path_params=[param[int]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[UploadFromUrl | UploadFromUrlDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[UploadResponse],
            error_mapper=upload_item_external_error_mapper,
            request_options=request_options,
        )
