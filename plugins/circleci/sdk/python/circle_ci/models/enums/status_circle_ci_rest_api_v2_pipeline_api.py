from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class StatusCircleCiRestApiV2PipelineApi(str, Enum):
    """The current status of the workflow"""

    SUCCESS = "success"
    RUNNING = "running"
    NOT_RUN = "not_run"
    FAILED = "failed"
    ERROR = "error"
    FAILING = "failing"
    ON_HOLD = "on_hold"
    CANCELED = "canceled"
    UNAUTHORIZED = "unauthorized"

    __str__ = str.__str__


StatusCircleCiRestApiV2PipelineApiOrStr: TypeAlias = Annotated[
    StatusCircleCiRestApiV2PipelineApi | str, open_enum_validator(StatusCircleCiRestApiV2PipelineApi)
]
