from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Principal(SdkBaseModel):
    service: Optional[str] = UNSET
    """The name of the Amazon Web Services service that should allowed or denied access to an Amazon Lex action."""

    arn: Optional[str] = UNSET
    """The Amazon Resource Name (ARN) of the principal."""


class PrincipalDict(TypedDict):
    service: NotRequired[str]
    arn: NotRequired[str]
