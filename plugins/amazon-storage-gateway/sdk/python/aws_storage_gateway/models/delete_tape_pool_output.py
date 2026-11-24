from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class DeleteTapePoolOutput(SdkBaseModel):
    pool_arn: Optional[str] = Field(default=UNSET, alias="PoolARN")
    """The Amazon Resource Name (ARN) of the custom tape pool being deleted."""


class DeleteTapePoolOutputDict(TypedDict):
    pool_arn: NotRequired[str]
