from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class CreateTapePoolOutput(SdkBaseModel):
    pool_arn: Optional[str] = Field(default=UNSET, alias="PoolARN")
    """The unique Amazon Resource Name (ARN) that represents the custom tape pool. Use the ListTapePools operation to
    return a list of tape pools for your account and Amazon Web Services Region."""


class CreateTapePoolOutputDict(TypedDict):
    pool_arn: NotRequired[str]
