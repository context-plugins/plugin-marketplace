from __future__ import annotations

from dataclasses import dataclass
from typing import Literal, TypeAlias

from .core import AsyncAuthScheme, AuthScheme


@dataclass(frozen=True, slots=True, kw_only=True)
class AuthSchemes:
    oauth2: AuthScheme


@dataclass(frozen=True, slots=True, kw_only=True)
class AsyncAuthSchemes:
    oauth2: AsyncAuthScheme


Oauth2Scope: TypeAlias = Literal[
    "instagram_basic",
    "instagram_content_publish",
    "instagram_manage_comments",
    "instagram_manage_insights",
    "instagram_manage_messages",
    "pages_show_list",
    "pages_read_engagement",
]
"""``instagram_basic``: Read user profile and media. ``instagram_content_publish``: Publish content on behalf of the
user. ``instagram_manage_comments``: Manage comments on media. ``instagram_manage_insights``: Access insights and
analytics. ``instagram_manage_messages``: Manage Instagram Direct messages. ``pages_show_list``: Show list of pages
managed by user. ``pages_read_engagement``: Read engagement data from pages."""
