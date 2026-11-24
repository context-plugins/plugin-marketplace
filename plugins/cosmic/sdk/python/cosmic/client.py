from __future__ import annotations

from collections.abc import Sequence
from functools import cached_property
from types import TracebackType

from typing_extensions import Self

from .apis.blocks import Blocks
from .apis.media_api import MediaApi
from .apis.object_revisions import ObjectRevisions
from .apis.object_types import ObjectTypes
from .apis.objects import Objects
from .apis.status_api import StatusApi
from .auth import AuthSchemes
from .base_client import DEFAULT_TIMEOUT, BaseCosmicClient
from .core import (
    OPERATING_SYSTEM,
    PYTHON_RUNTIME,
    ApiKeyQueryScheme,
    BearerAuthScheme,
    HttpClient,
    Httpx2Client,
    LoggingOptionsOrDict,
    RawClient,
    RetryOptionsOrDict,
    SdkHook,
    SdkHooksDict,
    no_auth,
    param,
)


class CosmicClient(BaseCosmicClient[RawClient]):
    def __init__(
        self,
        *,
        base_url: str | None = None,
        timeout: float = DEFAULT_TIMEOUT,
        retry_options: int | RetryOptionsOrDict | None = None,
        logging_options: LoggingOptionsOrDict | None = None,
        hooks: Sequence[SdkHook] | SdkHooksDict | None = None,
        custom_http_client: HttpClient | None = None,
        read_key: str | None = None,
        write_key: str | None = None,
    ) -> None:
        super().__init__(
            base_url=base_url, timeout=timeout, retry_options=retry_options, logging_options=logging_options
        )
        self._raw_client = RawClient(
            http_client=custom_http_client if custom_http_client is not None else Httpx2Client(timeout=timeout),
            retry_options=self._retry_options,
            logging_options=self._logging_options,
            hooks=hooks if hooks is not None else [],
            global_headers=[
                param[str]("User-Agent", "CosmicClient/3.0.0 Python"),
                param[str]("X-APIMatic-Lang", "Python"),
                param[str]("X-APIMatic-Package-Version", "3.0.0"),
                param[str]("X-APIMatic-Gen-Version", "4.0.0"),
                param[str]("X-APIMatic-OS", OPERATING_SYSTEM),
                param[str]("X-APIMatic-Runtime", PYTHON_RUNTIME),
            ],
        )
        self._auth = AuthSchemes(
            read_key=ApiKeyQueryScheme("read_key", read_key) if read_key is not None else no_auth,
            write_key=BearerAuthScheme(write_key) if write_key is not None else no_auth,
        )

    @cached_property
    def blocks(self) -> Blocks:
        return Blocks(self._raw_client, self._server, self._auth)

    @cached_property
    def media_api(self) -> MediaApi:
        return MediaApi(self._raw_client, self._server, self._auth)

    @cached_property
    def object_revisions(self) -> ObjectRevisions:
        return ObjectRevisions(self._raw_client, self._server, self._auth)

    @cached_property
    def object_types(self) -> ObjectTypes:
        return ObjectTypes(self._raw_client, self._server, self._auth)

    @cached_property
    def objects(self) -> Objects:
        return Objects(self._raw_client, self._server, self._auth)

    @cached_property
    def status_api(self) -> StatusApi:
        return StatusApi(self._raw_client, self._server)

    def close(self) -> None:
        self._raw_client.http_client.close()

    def __enter__(self) -> Self:
        return self

    def __exit__(
        self, exc_type: type[BaseException] | None, exc: BaseException | None, exc_tb: TracebackType | None
    ) -> None:
        self.close()


Client = CosmicClient
