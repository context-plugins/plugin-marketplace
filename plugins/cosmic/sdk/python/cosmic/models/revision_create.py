from __future__ import annotations

from typing import Any

from pydantic import ConfigDict
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.status import Status, StatusOrStr
from .unions.publish_at import PublishAt, PublishAtDict
from .unions.unpublish_at import UnpublishAt, UnpublishAtDict


class RevisionCreate(SdkBaseModel):
    """Creates a draft revision. Publish by updating the Object with ``status: published``."""

    model_config = ConfigDict(extra="forbid")

    title: Optional[str] = UNSET
    slug: Optional[str] = UNSET
    status: StatusOrStr = Status.DRAFT
    content: Optional[str] = UNSET
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

    thumbnail: Optional[str] = UNSET
    """Media ``name``."""

    locale: Optional[str] = UNSET
    publish_at: Optional[PublishAt] = UNSET
    """UNIX millisecond timestamp."""

    unpublish_at: Optional[UnpublishAt] = UNSET
    """UNIX millisecond timestamp."""

    trigger_webhook: Optional[bool] = UNSET


class RevisionCreateDict(TypedDict):
    title: NotRequired[str]
    slug: NotRequired[str]
    status: NotRequired[StatusOrStr]
    content: NotRequired[str]
    metadata: NotRequired[Any]
    thumbnail: NotRequired[str]
    locale: NotRequired[str]
    publish_at: NotRequired[PublishAtDict]
    unpublish_at: NotRequired[UnpublishAtDict]
    trigger_webhook: NotRequired[bool]
