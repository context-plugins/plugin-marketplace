from __future__ import annotations

from typing import Any

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class TriggerPipelineRequest(SdkBaseModel):
    branch: Optional[str] = UNSET
    """The branch to build"""

    tag: Optional[str] = UNSET
    """The tag to build"""

    parameters: Optional[Any] = UNSET
    """Pipeline parameters as key-value pairs"""


class TriggerPipelineRequestDict(TypedDict):
    branch: NotRequired[str]
    tag: NotRequired[str]
    parameters: NotRequired[Any]
