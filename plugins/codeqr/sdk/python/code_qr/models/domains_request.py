from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel
from .enums.type import Type, TypeOrStr


class DomainsRequest(SdkBaseModel):
    slug: str
    """Name of the domain."""

    target: OptionalNullable[str] = UNSET
    """The target URL to redirect to when accessing the domain root."""

    type_: TypeOrStr = Field(default=Type.REDIRECT, alias="type")
    """The behavior type for the domain root redirect."""

    expired_url: OptionalNullable[str] = Field(default=UNSET, alias="expiredUrl")
    """Redirect users to a specific URL when any link under this domain has expired."""

    archived: bool = False
    """Whether to archive this domain. ``false`` will unarchive a previously archived domain."""

    placeholder: str | None = "https://codeqr.io/help/article/what-is-codeqr"
    """Provide context to your teammates in the link creation modal by showing them an example of a link to be
    shortened."""


class DomainsRequestDict(TypedDict):
    slug: str
    target: NotRequired[str | None]
    type_: NotRequired[TypeOrStr]
    expired_url: NotRequired[str | None]
    archived: NotRequired[bool]
    placeholder: NotRequired[str | None]
