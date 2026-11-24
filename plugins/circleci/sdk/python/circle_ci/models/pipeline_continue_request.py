from __future__ import annotations

from typing import Any

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class PipelineContinueRequest(SdkBaseModel):
    continuation_key: str = Field(alias="continuation-key")
    """A pipeline continuation key"""

    configuration: str
    """A configuration string for the pipeline"""

    parameters: Optional[Any] = UNSET
    """Pipeline parameters as key-value pairs"""


class PipelineContinueRequestDict(TypedDict):
    continuation_key: str
    configuration: str
    parameters: NotRequired[Any]
