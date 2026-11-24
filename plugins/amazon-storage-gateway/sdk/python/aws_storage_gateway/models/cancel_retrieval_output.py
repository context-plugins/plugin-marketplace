from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class CancelRetrievalOutput(SdkBaseModel):
    tape_arn: Optional[str] = Field(default=UNSET, alias="TapeARN")
    """The Amazon Resource Name (ARN) of the virtual tape for which retrieval was canceled."""


class CancelRetrievalOutputDict(TypedDict):
    tape_arn: NotRequired[str]
