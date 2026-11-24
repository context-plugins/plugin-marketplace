from __future__ import annotations

from typing import Generic

from .core import LoggingOptions, LoggingOptionsOrDict, RawClientT, RetryOptions, RetryOptionsOrDict
from .server.environment import Environment, validate_environment
from .server.server import Server
from .server.server_config import Environment2Config, ProductionConfig, ServerConfig

DEFAULT_TIMEOUT = 30.0


class BaseMailerLiteClient(Generic[RawClientT]):
    _raw_client: RawClientT

    def __init__(
        self,
        *,
        environment: Environment = "production",
        base_url: str | None = None,
        timeout: float = DEFAULT_TIMEOUT,
        retry_options: int | RetryOptionsOrDict | None = None,
        logging_options: LoggingOptionsOrDict | None = None,
    ) -> None:
        if not timeout > 0:
            raise ValueError(f"timeout must be greater than 0; got {timeout!r}")
        self._server = Server(
            validate_environment(environment),
            (
                ServerConfig(
                    production=ProductionConfig(base_url=base_url), environment2=Environment2Config(base_url=base_url)
                )
                if base_url is not None
                else ServerConfig()
            ),
        )
        self._retry_options = RetryOptions.coerce(retry_options)
        self._logging_options = LoggingOptions.coerce(logging_options, package="mailer_lite")
