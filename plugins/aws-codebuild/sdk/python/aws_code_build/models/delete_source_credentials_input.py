from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class DeleteSourceCredentialsInput(SdkBaseModel):
    arn: str
    """The Amazon Resource Name (ARN) of the token."""


class DeleteSourceCredentialsInputDict(TypedDict):
    arn: str
