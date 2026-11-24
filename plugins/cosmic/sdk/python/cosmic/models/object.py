from __future__ import annotations

from typing import Any

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, RFC3339DateTime, SdkBaseModel
from .enums.status import StatusOrStr
from .unions.publish_at import PublishAt, PublishAtDict
from .unions.unpublish_at import UnpublishAt, UnpublishAtDict


class Object(SdkBaseModel):
    """A single piece of content. Which properties are present depends on ``props``."""

    id: Optional[str] = UNSET
    """Unique identifier."""

    type_: Optional[str] = Field(default=UNSET, alias="type")
    """Object type slug."""

    title: Optional[str] = UNSET
    slug: Optional[str] = UNSET
    """Unique within the Object type. Localized versions of an Object share a slug and count as one Object against plan
    limits."""

    status: Optional[StatusOrStr] = UNSET
    content: OptionalNullable[str] = UNSET
    """HTML content. Deprecated in v3; use a Metafield instead."""

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
    """Bucket id."""

    thumbnail: OptionalNullable[str] = UNSET
    """Media ``name`` of the Object thumbnail. Returned as a URL on read."""

    locale: OptionalNullable[str] = UNSET
    """Locale code, when the Object type has localization enabled."""

    created_at: Optional[RFC3339DateTime] = UNSET
    created_by: Optional[str] = UNSET
    """User id."""

    modified_at: Optional[RFC3339DateTime] = UNSET
    modified_by: Optional[str] = UNSET
    """User id."""

    published_at: OptionalNullable[RFC3339DateTime] = UNSET
    publish_at: OptionalNullable[PublishAt] = UNSET
    """UNIX millisecond timestamp for scheduled publishing."""

    unpublish_at: OptionalNullable[UnpublishAt] = UNSET
    """UNIX millisecond timestamp for scheduled unpublishing."""

    assigned_to: OptionalNullable[str] = UNSET
    """User id."""

    assigned_by: OptionalNullable[str] = UNSET
    """User id."""

    assigned_at: OptionalNullable[RFC3339DateTime] = UNSET


class ObjectDict(TypedDict):
    id: NotRequired[str]
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
    modified_by: NotRequired[str]
    published_at: NotRequired[RFC3339DateTime | None]
    publish_at: NotRequired[PublishAtDict | None]
    unpublish_at: NotRequired[UnpublishAtDict | None]
    assigned_to: NotRequired[str | None]
    assigned_by: NotRequired[str | None]
    assigned_at: NotRequired[RFC3339DateTime | None]
