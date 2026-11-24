from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class DeleteTapePoolInput(SdkBaseModel):
    pool_arn: str = Field(alias="PoolARN")
    """The Amazon Resource Name (ARN) of the custom tape pool to delete."""


class DeleteTapePoolInputDict(TypedDict):
    pool_arn: str
