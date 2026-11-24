from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ImportSourceCredentialsOutput(SdkBaseModel):
    arn: Optional[str] = UNSET
    """The Amazon Resource Name (ARN) of the token."""


class ImportSourceCredentialsOutputDict(TypedDict):
    arn: NotRequired[str]
