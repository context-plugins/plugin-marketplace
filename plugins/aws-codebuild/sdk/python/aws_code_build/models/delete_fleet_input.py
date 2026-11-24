from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class DeleteFleetInput(SdkBaseModel):
    arn: str
    """The ARN of the compute fleet."""


class DeleteFleetInputDict(TypedDict):
    arn: str
