from __future__ import annotations

from typing import Annotated, TypeAlias

from pydantic import Tag

from ...core import WireDiscriminator
from ..group_observer_response import GroupObserverResponse, GroupObserverResponseDict
from ..user_observer_response import UserObserverResponse, UserObserverResponseDict

SignatureObserverResponse: TypeAlias = Annotated[
    Annotated[UserObserverResponse, Tag("USER")] | Annotated[GroupObserverResponse, Tag("GROUP")],
    WireDiscriminator("type"),
]
"""Response object representing an observer that has been added to a signature request.

Depending on the type, either user_info or group_info is present."""

SignatureObserverResponseDict: TypeAlias = UserObserverResponseDict | GroupObserverResponseDict
