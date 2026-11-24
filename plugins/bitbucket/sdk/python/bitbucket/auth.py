from __future__ import annotations

from dataclasses import dataclass
from typing import Literal, TypeAlias

from .core import AsyncAuthScheme, AuthScheme


@dataclass(frozen=True, slots=True, kw_only=True)
class AuthSchemes:
    basic: AuthScheme
    oauth2: AuthScheme
    api_key: AuthScheme


@dataclass(frozen=True, slots=True, kw_only=True)
class AsyncAuthSchemes:
    basic: AsyncAuthScheme
    oauth2: AsyncAuthScheme
    api_key: AsyncAuthScheme


Oauth2Scope: TypeAlias = Literal[
    "repository",
    "repository:write",
    "repository:admin",
    "repository:delete",
    "project",
    "project:admin",
    "email",
    "account",
    "account:write",
    "team",
    "team:write",
    "pipeline",
    "pipeline:write",
    "pipeline:variable",
    "runner",
    "runner:write",
    "test",
    "test:write",
    "pullrequest",
    "pullrequest:write",
    "webhook",
    "issue",
    "issue:write",
    "snippet",
    "snippet:write",
    "wiki",
]
"""``repository``: Read your repositories. ``repository:write``: Read and modify your repositories.
``repository:admin``: Administer your repositories. ``repository:delete``: Delete your repositories. ``project``: Read
your workspace's project settings and read repositories contained within your workspace's projects. ``project:admin``:
Read and modify settings for projects in your workspace. ``email``: Read your account's primary email address.
``account``: Read your account information. ``account:write``: Read and modify your account information. ``team``: Read
your team membership information. ``team:write``: Read and modify your team membership information. ``pipeline``: Access
your repositories' build pipelines. ``pipeline:write``: Access and rerun your repositories' build pipelines.
``pipeline:variable``: Access your repositories' build pipelines and configure their variables. ``runner``: Access your
workspaces/repositories' runners. ``runner:write``: Access and edit your workspaces/repositories' runners. ``test``:
Access your workspaces/repositories' test. ``test:write``: Access and edit your workspaces/repositories' test.
``pullrequest``: Read your repositories and their pull requests. ``pullrequest:write``: Read and modify your
repositories and their pull requests. ``webhook``: Read and modify your repositories' webhooks. ``issue``: Read your
repositories' issues. ``issue:write``: Read and modify your repositories' issues. ``snippet``: Read your snippets.
``snippet:write``: Read and modify your snippets. ``wiki``: Read and modify your repositories' wikis."""
