from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class NodeInitializationAction(SdkBaseModel):
    """Specifies an executable to run on a fully configured node and a timeout period for executable completion."""

    execution_timeout: Optional[str] = Field(default=UNSET, alias="executionTimeout")
    """Optional. Amount of time executable has to complete. Default is 10 minutes (see JSON representation of Duration
    (https://developers.google.com/protocol-buffers/docs/proto3#json)).Cluster creation fails with an explanatory error
    message (the name of the executable that caused the error and the exceeded timeout period) if the executable is not
    completed at end of the timeout period."""

    executable_file: Optional[str] = Field(default=UNSET, alias="executableFile")
    """Required. Cloud Storage URI of executable file."""


class NodeInitializationActionDict(TypedDict):
    execution_timeout: NotRequired[str]
    executable_file: NotRequired[str]
