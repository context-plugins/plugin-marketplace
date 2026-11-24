from __future__ import annotations

from typing import Any

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .unions.user import User, UserDict


class SubmittedComposeService(SdkBaseModel):
    """Pullable service in a normalized hosted Compose document."""

    image: Optional[str] = UNSET
    build: Optional[Any] = UNSET
    user: Optional[User] = UNSET
    environment: Optional[dict[str, str]] = UNSET
    entrypoint: Optional[list[str]] = UNSET
    command: Optional[list[str]] = UNSET
    working_dir: Optional[str] = UNSET
    healthcheck: Optional[Any] = UNSET
    expose: Optional[list[Any]] = UNSET
    ports: Optional[list[Any]] = UNSET
    volumes: Optional[list[Any]] = UNSET
    scale: Optional[int] = UNSET


class SubmittedComposeServiceDict(TypedDict):
    image: NotRequired[str]
    build: NotRequired[Any]
    user: NotRequired[UserDict]
    environment: NotRequired[dict[str, str]]
    entrypoint: NotRequired[list[str]]
    command: NotRequired[list[str]]
    working_dir: NotRequired[str]
    healthcheck: NotRequired[Any]
    expose: NotRequired[list[Any]]
    ports: NotRequired[list[Any]]
    volumes: NotRequired[list[Any]]
    scale: NotRequired[int]
