from __future__ import annotations

from typing import Any

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, RFC3339DateTime, SdkBaseModel
from .enums.status import StatusOrStr


class Revision(SdkBaseModel):
    """An immutable snapshot of an Object at a point in time."""

    id: Optional[str] = UNSET
    object_id: Optional[str] = UNSET
    """The Object this revision belongs to."""

    type_: Optional[str] = Field(default=UNSET, alias="type")
    title: Optional[str] = UNSET
    slug: Optional[str] = UNSET
    status: Optional[StatusOrStr] = UNSET
    content: OptionalNullable[str] = UNSET
    metadata: Optional[Any] = UNSET
    """Values of the Metafields defined on the Object type, keyed by Metafield ``key``.

    The value shape follows the Metafield type, and differs between write and read for two of them:

    - Text, textarea, markdown, and HTML Metafields are strings. Number Metafields are numbers, switches are booleans,
        dates are ISO 8601 strings.
    - Object Relationship Metafields are written as an Object ``id`` string (or an array of ids for the multiple
        variant) and returned as a nested Object (or array of Objects) once ``depth`` is at least 1.
    - File and Image Metafields are written as a media ``name`` string (or an array of names) and returned as an object
        with ``url`` and ``imgix_url``, plus ``alt_text``, ``width``, and ``height`` when requested via ``props``.
    - Repeater Metafields are arrays of objects keyed by the child Metafield keys."""

    bucket: Optional[str] = UNSET
    thumbnail: OptionalNullable[str] = UNSET
    locale: OptionalNullable[str] = UNSET
    created_at: Optional[RFC3339DateTime] = UNSET
    created_by: Optional[str] = UNSET
    modified_at: Optional[RFC3339DateTime] = UNSET
    published_at: OptionalNullable[RFC3339DateTime] = UNSET


class RevisionDict(TypedDict):
    id: NotRequired[str]
    object_id: NotRequired[str]
    type_: NotRequired[str]
    title: NotRequired[str]
    slug: NotRequired[str]
    status: NotRequired[StatusOrStr]
    content: NotRequired[str | None]
    metadata: NotRequired[Any]
    bucket: NotRequired[str]
    thumbnail: NotRequired[str | None]
    locale: NotRequired[str | None]
    created_at: NotRequired[RFC3339DateTime]
    created_by: NotRequired[str]
    modified_at: NotRequired[RFC3339DateTime]
    published_at: NotRequired[RFC3339DateTime | None]
