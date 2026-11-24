from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.type import Type, TypeOrStr


class DomainSchema(SdkBaseModel):
    id: str
    """The unique identifier of the domain."""

    slug: str
    """The domain name."""

    verified: bool = False
    """Whether the domain is verified."""

    primary: bool = False
    """Whether the domain is the primary domain for the project."""

    archived: bool = False
    """Whether the domain is archived."""

    target: str | None
    """The target URL to redirect to when accessing the domain root."""

    type_: TypeOrStr = Field(default=Type.REDIRECT, alias="type")
    """The behavior type for the domain root redirect."""

    placeholder: str = "https://codeqr.io/help/article/what-is-codeqr"
    """Provide context to your teammates in the link creation modal by showing them an example of a link to be
    shortened."""

    expired_url: str | None = Field(alias="expiredUrl")
    """The URL to redirect to when a link under this domain has expired."""

    created_at: str = Field(alias="createdAt")
    """The date the domain was created."""

    updated_at: str = Field(alias="updatedAt")
    """The date the domain was last updated."""


class DomainSchemaDict(TypedDict):
    id: str
    slug: str
    verified: bool
    primary: bool
    archived: bool
    target: str | None
    type_: TypeOrStr
    placeholder: str
    expired_url: str | None
    created_at: str
    updated_at: str
