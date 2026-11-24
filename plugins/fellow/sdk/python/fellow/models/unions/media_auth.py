from __future__ import annotations

from typing import Annotated, TypeAlias

from pydantic import Tag

from ...core import WireDiscriminator
from ..basic_auth import BasicAuth, BasicAuthDict
from ..bearer_token_auth import BearerTokenAuth, BearerTokenAuthDict

MediaAuth: TypeAlias = Annotated[
    Annotated[BearerTokenAuth, Tag("bearer_token")] | Annotated[BasicAuth, Tag("basic_auth")], WireDiscriminator("type")
]

MediaAuthDict: TypeAlias = BearerTokenAuthDict | BasicAuthDict
