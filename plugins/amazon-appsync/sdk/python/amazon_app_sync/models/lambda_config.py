from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.invoke_type import InvokeTypeOrStr


class LambdaConfig(SdkBaseModel):
    invoke_type: Optional[InvokeTypeOrStr] = Field(default=UNSET, alias="invokeType")
    """The invocation type for a Lambda data source."""


class LambdaConfigDict(TypedDict):
    invoke_type: NotRequired[InvokeTypeOrStr]
