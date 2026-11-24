from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Executor(SdkBaseModel):
    """The executor configuration"""

    type_: Optional[str] = Field(default=UNSET, alias="type")
    """The executor type"""

    resource_class: Optional[str] = UNSET
    """The resource class"""


class ExecutorDict(TypedDict):
    type_: NotRequired[str]
    resource_class: NotRequired[str]
