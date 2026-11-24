from __future__ import annotations

from typing import Annotated, TypeAlias

from pydantic import Tag

from ...core import WireDiscriminator
from ..inline_secret_source import InlineSecretSource, InlineSecretSourceDict
from ..one_password_secret_source import OnePasswordSecretSource, OnePasswordSecretSourceDict

Source: TypeAlias = Annotated[
    Annotated[InlineSecretSource, Tag("inline")] | Annotated[OnePasswordSecretSource, Tag("onepassword")],
    WireDiscriminator("type"),
]

SourceDict: TypeAlias = InlineSecretSourceDict | OnePasswordSecretSourceDict
