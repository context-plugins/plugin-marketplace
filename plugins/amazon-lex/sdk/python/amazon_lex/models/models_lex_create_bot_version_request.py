from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ModelsLexCreateBotVersionRequest(SdkBaseModel):
    name: str
    """The name of the bot that you want to create a new version of. The name is case sensitive."""

    checksum: Optional[str] = UNSET
    """Identifies a specific revision of the $LATEST version of the bot. If you specify a checksum and the $LATEST
    version of the bot has a different checksum, a PreconditionFailedException exception is returned and Amazon Lex
    doesn't publish a new version. If you don't specify a checksum, Amazon Lex publishes the $LATEST version."""


class ModelsLexCreateBotVersionRequestDict(TypedDict):
    name: str
    checksum: NotRequired[str]
