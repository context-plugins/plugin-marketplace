from __future__ import annotations

from uuid import UUID, uuid4

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    AnySchemes,
    ApiResult,
    AsyncAnySchemes,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    RawClient,
    RequestOptionsOrDict,
    SecuredRawResponse,
    async_empty_response,
    async_json_decoder,
    empty_response,
    json_body,
    json_decoder,
    param,
    unwrap,
)
from ..errors.delete_repositories_by_workspace_by_repo_slug_refs_branches_by_name_error import (
    DeleteRepositoriesByWorkspaceByRepoSlugRefsBranchesByNameErrorBody,
    delete_repositories_by_workspace_by_repo_slug_refs_branches_by_name_error_mapper,
)
from ..errors.delete_repositories_by_workspace_by_repo_slug_refs_tags_by_name_error import (
    DeleteRepositoriesByWorkspaceByRepoSlugRefsTagsByNameErrorBody,
    delete_repositories_by_workspace_by_repo_slug_refs_tags_by_name_error_mapper,
)
from ..errors.get_repositories_by_workspace_by_repo_slug_refs_branches_by_name_error import (
    GetRepositoriesByWorkspaceByRepoSlugRefsBranchesByNameErrorBody,
    get_repositories_by_workspace_by_repo_slug_refs_branches_by_name_error_mapper,
)
from ..errors.get_repositories_by_workspace_by_repo_slug_refs_branches_error import (
    GetRepositoriesByWorkspaceByRepoSlugRefsBranchesErrorBody,
    get_repositories_by_workspace_by_repo_slug_refs_branches_error_mapper,
)
from ..errors.get_repositories_by_workspace_by_repo_slug_refs_error import (
    GetRepositoriesByWorkspaceByRepoSlugRefsErrorBody,
    get_repositories_by_workspace_by_repo_slug_refs_error_mapper,
)
from ..errors.get_repositories_by_workspace_by_repo_slug_refs_tags_by_name_error import (
    GetRepositoriesByWorkspaceByRepoSlugRefsTagsByNameErrorBody,
    get_repositories_by_workspace_by_repo_slug_refs_tags_by_name_error_mapper,
)
from ..errors.get_repositories_by_workspace_by_repo_slug_refs_tags_error import (
    GetRepositoriesByWorkspaceByRepoSlugRefsTagsErrorBody,
    get_repositories_by_workspace_by_repo_slug_refs_tags_error_mapper,
)
from ..errors.post_repositories_by_workspace_by_repo_slug_refs_branches_error import (
    PostRepositoriesByWorkspaceByRepoSlugRefsBranchesErrorBody,
    post_repositories_by_workspace_by_repo_slug_refs_branches_error_mapper,
)
from ..errors.post_repositories_by_workspace_by_repo_slug_refs_tags_error import (
    PostRepositoriesByWorkspaceByRepoSlugRefsTagsErrorBody,
    post_repositories_by_workspace_by_repo_slug_refs_tags_error_mapper,
)
from ..models.branch import Branch
from ..models.paginated_branches import PaginatedBranches
from ..models.paginated_refs import PaginatedRefs
from ..models.paginated_tags import PaginatedTags
from ..models.tag_model import TagModel, TagModelDict
from ..server.server import Server


class Refs:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = RefsWithRawResponse(client, server, auth)

    def delete_repositories_by_workspace_by_repo_slug_refs_branches_by_name(
        self, name: str, repo_slug: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Delete a branch in the specified repository.

        The main branch is not allowed to be deleted and will return a 400 response.

        The branch name should not include any prefixes (e.g. refs/heads).

        Args:
            name: The name of the branch.
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Indicates that the specified branch was successfully deleted.

        Raises:
            ApiError: If the repository is private and the authenticated user does not have access to it. The specified
                repository or branch does not exist. ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.delete_repositories_by_workspace_by_repo_slug_refs_branches_by_name(
                name, repo_slug, workspace, request_options=request_options
            ),
        )

    def delete_repositories_by_workspace_by_repo_slug_refs_tags_by_name(
        self, name: str, repo_slug: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Delete a tag in the specified repository.

        The tag name should not include any prefixes (e.g. refs/tags).

        Args:
            name: The name of the tag.
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Indicates the specified tag was successfully deleted.

        Raises:
            ApiError: If the repository is private and the authenticated user does not have access to it. The specified
                repository or tag does not exist. ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.delete_repositories_by_workspace_by_repo_slug_refs_tags_by_name(
                name, repo_slug, workspace, request_options=request_options
            ),
        )

    def get_repositories_by_workspace_by_repo_slug_refs(
        self,
        repo_slug: str,
        workspace: str,
        *,
        q: str | None = None,
        sort: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> PaginatedRefs:
        """Returns the branches and tags in the repository.

        By default, results will be in the order the underlying source control system returns them and identical to the
        ordering one sees when running "$ git show-ref". Note that this follows simple lexical ordering of the ref
        names.

        This can be undesirable as it does apply any natural sorting semantics, meaning for instance that refs are
        sorted ["branch1", "branch10", "branch2", "v10", "v11", "v9"] instead of ["branch1", "branch2", "branch10",
        "v9", "v10", "v11"].

        Sorting can be changed using the ?sort= query parameter. When using ?sort=name to explicitly sort on ref name,
        Bitbucket will apply natural sorting and interpret numerical values as numbers instead of strings.

        Args:
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            q: Query string to narrow down the response as per `filtering and sorting
                </cloud/bitbucket/rest/intro/#filtering>`__.
            sort: Field by which the results should be sorted as per `filtering and sorting
                </cloud/bitbucket/rest/intro/#filtering>`__. The ``name`` field is handled specially for refs in that,
                if specified as the sort field, it uses a natural sort order instead of the default lexicographical sort
                order. For example, it will return ['1.1', '1.2', '1.10'] instead of ['1.1', '1.10', '1.2'].
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A paginated list of refs matching any filter criteria that were provided.

        Raises:
            ApiError: If the repository is private and the authenticated user does not have access to it. The specified
                repository does not exist. ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.get_repositories_by_workspace_by_repo_slug_refs(
                repo_slug, workspace, q=q, sort=sort, request_options=request_options
            ),
        )

    def get_repositories_by_workspace_by_repo_slug_refs_branches(
        self,
        repo_slug: str,
        workspace: str,
        *,
        q: str | None = None,
        sort: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> PaginatedBranches:
        """Returns a list of all open branches within the specified repository. Results will be in the order the source
        control manager returns them.

        Branches support filtering and sorting that can be used to search for specific branches. For instance, to find
        all branches that have "stab" in their name:

        ```
        curl -s https://api.bitbucket.org/2.0/repositories/atlassian/aui/refs/branches -G --data-urlencode 'q=name ~
        "stab"'
        ```

        By default, results will be in the order the underlying source control system returns them and identical to the
        ordering one sees when running "$ git branch --list". Note that this follows simple lexical ordering of the ref
        names.

        This can be undesirable as it does apply any natural sorting semantics, meaning for instance that tags are
        sorted ["v10", "v11", "v9"] instead of ["v9", "v10", "v11"].

        Sorting can be changed using the ?q= query parameter. When using ?q=name to explicitly sort on ref name,
        Bitbucket will apply natural sorting and interpret numerical values as numbers instead of strings.

        Args:
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            q: Query string to narrow down the response as per `filtering and sorting
                </cloud/bitbucket/rest/intro/#filtering>`__.
            sort: Field by which the results should be sorted as per `filtering and sorting
                </cloud/bitbucket/rest/intro/#filtering>`__. The ``name`` field is handled specially for branches in
                that, if specified as the sort field, it uses a natural sort order instead of the default
                lexicographical sort order. For example, it will return ['branch1', 'branch2', 'branch10'] instead of
                ['branch1', 'branch10', 'branch2'].
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A paginated list of branches matching any filter criteria that were provided.

        Raises:
            ApiError: If the repository is private and the authenticated user does not have access to it. The specified
                repository does not exist. ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.get_repositories_by_workspace_by_repo_slug_refs_branches(
                repo_slug, workspace, q=q, sort=sort, request_options=request_options
            ),
        )

    def get_repositories_by_workspace_by_repo_slug_refs_branches_by_name(
        self, name: str, repo_slug: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> Branch:
        """Returns a branch object within the specified repository.

        This call requires authentication. Private repositories require the caller to authenticate with an account that
        has appropriate authorization.

        For Git, the branch name should not include any prefixes (e.g. refs/heads).

        Args:
            name: The name of the branch.
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The branch object.

        Raises:
            ApiError: If the repository is private and the authenticated user does not have access to it. The specified
                repository or branch does not exist. ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.get_repositories_by_workspace_by_repo_slug_refs_branches_by_name(
                name, repo_slug, workspace, request_options=request_options
            ),
        )

    def get_repositories_by_workspace_by_repo_slug_refs_tags(
        self,
        repo_slug: str,
        workspace: str,
        *,
        q: str | None = None,
        sort: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> PaginatedTags:
        """Returns the tags in the repository.

        By default, results will be in the order the underlying source control system returns them and identical to the
        ordering one sees when running "$ git tag --list". Note that this follows simple lexical ordering of the ref
        names.

        This can be undesirable as it does apply any natural sorting semantics, meaning for instance that tags are
        sorted ["v10", "v11", "v9"] instead of ["v9", "v10", "v11"].

        Sorting can be changed using the ?sort= query parameter. When using ?sort=name to explicitly sort on ref name,
        Bitbucket will apply natural sorting and interpret numerical values as numbers instead of strings.

        Args:
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            q: Query string to narrow down the response as per `filtering and sorting
                </cloud/bitbucket/rest/intro/#filtering>`__.
            sort: Field by which the results should be sorted as per `filtering and sorting
                </cloud/bitbucket/rest/intro/#filtering>`__. The ``name`` field is handled specially for tags in that,
                if specified as the sort field, it uses a natural sort order instead of the default lexicographical sort
                order. For example, it will return ['1.1', '1.2', '1.10'] instead of ['1.1', '1.10', '1.2'].
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A paginated list of tags matching any filter criteria that were provided.

        Raises:
            ApiError: If the repository is private and the authenticated user does not have access to it. The specified
                repository does not exist. ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.get_repositories_by_workspace_by_repo_slug_refs_tags(
                repo_slug, workspace, q=q, sort=sort, request_options=request_options
            ),
        )

    def get_repositories_by_workspace_by_repo_slug_refs_tags_by_name(
        self, name: str, repo_slug: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> TagModel:
        """Returns the specified tag.

        ```
        $ curl -s https://api.bitbucket.org/2.0/repositories/seanfarley/hg/refs/tags/3.8 -G | jq .
        {
        "name": "3.8", "links": { "commits": { "href":
        "https://api.bitbucket.org/2.0/repositories/seanfarley/hg/commits/3.8"
        },
        "self": { "href": "https://api.bitbucket.org/2.0/repositories/seanfarley/hg/refs/tags/3.8"
        },
        "html": { "href": "https://bitbucket.org/seanfarley/hg/commits/tag/3.8"
        }
        },
        "tagger": { "raw": "Matt Mackall ", "type": "author", "user": { "username": "mpmselenic", "nickname":
        "mpmselenic", "display_name": "Matt Mackall", "type": "user", "uuid": "{a4934530-db4c-419c-a478-9ab4964c2ee7}",
        "links": { "self": { "href": "https://api.bitbucket.org/2.0/users/mpmselenic"
        },
        "html": { "href": "https://bitbucket.org/mpmselenic/"
        },
        "avatar": { "href": "https://bitbucket.org/account/mpmselenic/avatar/32/"
        }
        }
        }
        },
        "date": "2016-05-01T18:52:25+00:00", "message": "Added tag 3.8 for changeset f85de28eae32", "type": "tag",
        "target": { "hash": "f85de28eae32e7d3064b1a1321309071bbaaa069", "repository": { "links": { "self": { "href":
        "https://api.bitbucket.org/2.0/repositories/seanfarley/hg"
        },
        "html": { "href": "https://bitbucket.org/seanfarley/hg"
        },
        "avatar": { "href": "https://bitbucket.org/seanfarley/hg/avatar/32/"
        }
        },
        "type": "repository", "name": "hg", "full_name": "seanfarley/hg", "uuid":
        "{c75687fb-e99d-4579-9087-190dbd406d30}"
        },
        "links": { "self": { "href":
        "https://api.bitbucket.org/2.0/repositories/seanfarley/hg/commit/f85de28eae32e7d3064b1a1321309071bbaaa069"
        },
        "comments": { "href":
        "https://api.bitbucket.org/2.0/repositories/seanfarley/hg/commit/f85de28eae32e7d3064b1a1321309071bbaaa069/comments"
        },
        "patch": { "href":
        "https://api.bitbucket.org/2.0/repositories/seanfarley/hg/patch/f85de28eae32e7d3064b1a1321309071bbaaa069"
        },
        "html": { "href": "https://bitbucket.org/seanfarley/hg/commits/f85de28eae32e7d3064b1a1321309071bbaaa069"
        },
        "diff": { "href":
        "https://api.bitbucket.org/2.0/repositories/seanfarley/hg/diff/f85de28eae32e7d3064b1a1321309071bbaaa069"
        },
        "approve": { "href":
        "https://api.bitbucket.org/2.0/repositories/seanfarley/hg/commit/f85de28eae32e7d3064b1a1321309071bbaaa069/approve"
        },
        "statuses": { "href":
        "https://api.bitbucket.org/2.0/repositories/seanfarley/hg/commit/f85de28eae32e7d3064b1a1321309071bbaaa069/statuses"
        }
        },
        "author": { "raw": "Sean Farley ", "type": "author", "user": { "username": "seanfarley", "nickname":
        "seanfarley", "display_name": "Sean Farley", "type": "user", "uuid": "{a295f8a8-5876-4d43-89b5-3ad8c6c3c51d}",
        "links": { "self": { "href": "https://api.bitbucket.org/2.0/users/seanfarley"
        },
        "html": { "href": "https://bitbucket.org/seanfarley/"
        },
        "avatar": { "href": "https://bitbucket.org/account/seanfarley/avatar/32/"
        }
        }
        }
        },
        "parents": [
        {
        "hash": "9a98d0e5b07fc60887f9d3d34d9ac7d536f470d2", "type": "commit", "links": { "self": { "href":
        "https://api.bitbucket.org/2.0/repositories/seanfarley/hg/commit/9a98d0e5b07fc60887f9d3d34d9ac7d536f470d2"
        },
        "html": { "href": "https://bitbucket.org/seanfarley/hg/commits/9a98d0e5b07fc60887f9d3d34d9ac7d536f470d2"
        }
        }
        }
        ],
        "date": "2016-05-01T04:21:17+00:00", "message": "debian: alphabetize build deps", "type": "commit"
        }
        }
        ```

        Args:
            name: The name of the tag.
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The tag object.

        Raises:
            ApiError: If the repository is private and the authenticated user does not have access to it. The specified
                repository or tag does not exist. ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.get_repositories_by_workspace_by_repo_slug_refs_tags_by_name(
                name, repo_slug, workspace, request_options=request_options
            ),
        )

    def post_repositories_by_workspace_by_repo_slug_refs_branches(
        self, repo_slug: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> Branch:
        r"""Creates a new branch in the specified repository.

        The payload of the POST should consist of a JSON document that contains the name of the tag and the target hash.

        ```
        curl https://api.bitbucket.org/2.0/repositories/seanfarley/hg/refs/branches \ -s -u seanfarley -X POST -H
        "Content-Type: application/json" \ -d '{ "name" : "smf/create-feature", "target" : { "hash" : "default",
        }
        }'
        ```

        This call requires authentication. Private repositories require the caller to authenticate with an account that
        has appropriate authorization.

        The branch name should not include any prefixes (e.g. refs/heads). This endpoint does support using short hash
        prefixes for the commit hash, but it may return a 400 response if the provided prefix is ambiguous. Using a full
        commit hash is the preferred approach.

        Args:
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The newly created branch object.

        Raises:
            ApiError: If the repository is private and the authenticated user does not have access to it. The specified
                repository or branch does not exist. ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.post_repositories_by_workspace_by_repo_slug_refs_branches(
                repo_slug, workspace, request_options=request_options
            ),
        )

    def post_repositories_by_workspace_by_repo_slug_refs_tags(
        self,
        repo_slug: str,
        workspace: str,
        body: TagModel | TagModelDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> TagModel:
        r"""Creates a new annotated tag in the specified repository.

        The payload of the POST should consist of a JSON document that contains the name of the tag and the target hash.

        ```
        curl https://api.bitbucket.org/2.0/repositories/jdoe/myrepo/refs/tags \ -s -u jdoe -X POST -H "Content-Type:
        application/json" \ -d '{ "name" : "new-tag-name", "target" : { "hash" : "a1b2c3d4e5f6",
        }
        }'
        ```

        This endpoint does support using short hash prefixes for the commit hash, but it may return a 400 response if
        the provided prefix is ambiguous. Using a full commit hash is the preferred approach.

        A message for the tag object may optionally be provided. If it is omitted or the provided message is empty, a
        default message of "Added tag for changeset " will be used.

        Args:
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The newly created tag.

        Raises:
            ApiError: If the target hash is missing, ambiguous, or invalid, or if the name is not provided. ``error`` is
                ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.post_repositories_by_workspace_by_repo_slug_refs_tags(
                repo_slug, workspace, body, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> RefsWithRawResponse:
        return self._with_raw_response


class AsyncRefs:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncRefsWithRawResponse(client, server, auth)

    async def delete_repositories_by_workspace_by_repo_slug_refs_branches_by_name(
        self, name: str, repo_slug: str, workspace: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Delete a branch in the specified repository.

        The main branch is not allowed to be deleted and will return a 400 response.

        The branch name should not include any prefixes (e.g. refs/heads).

        Args:
            name: The name of the branch.
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Indicates that the specified branch was successfully deleted.

        Raises:
            ApiError: If the repository is private and the authenticated user does not have access to it. The specified
                repository or branch does not exist. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.delete_repositories_by_workspace_by_repo_slug_refs_branches_by_name(
                name, repo_slug, workspace, request_options=request_options
            ),
        )

    async def delete_repositories_by_workspace_by_repo_slug_refs_tags_by_name(
        self, name: str, repo_slug: str, workspace: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Delete a tag in the specified repository.

        The tag name should not include any prefixes (e.g. refs/tags).

        Args:
            name: The name of the tag.
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Indicates the specified tag was successfully deleted.

        Raises:
            ApiError: If the repository is private and the authenticated user does not have access to it. The specified
                repository or tag does not exist. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.delete_repositories_by_workspace_by_repo_slug_refs_tags_by_name(
                name, repo_slug, workspace, request_options=request_options
            ),
        )

    async def get_repositories_by_workspace_by_repo_slug_refs(
        self,
        repo_slug: str,
        workspace: str,
        *,
        q: str | None = None,
        sort: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> PaginatedRefs:
        """Returns the branches and tags in the repository.

        By default, results will be in the order the underlying source control system returns them and identical to the
        ordering one sees when running "$ git show-ref". Note that this follows simple lexical ordering of the ref
        names.

        This can be undesirable as it does apply any natural sorting semantics, meaning for instance that refs are
        sorted ["branch1", "branch10", "branch2", "v10", "v11", "v9"] instead of ["branch1", "branch2", "branch10",
        "v9", "v10", "v11"].

        Sorting can be changed using the ?sort= query parameter. When using ?sort=name to explicitly sort on ref name,
        Bitbucket will apply natural sorting and interpret numerical values as numbers instead of strings.

        Args:
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            q: Query string to narrow down the response as per `filtering and sorting
                </cloud/bitbucket/rest/intro/#filtering>`__.
            sort: Field by which the results should be sorted as per `filtering and sorting
                </cloud/bitbucket/rest/intro/#filtering>`__. The ``name`` field is handled specially for refs in that,
                if specified as the sort field, it uses a natural sort order instead of the default lexicographical sort
                order. For example, it will return ['1.1', '1.2', '1.10'] instead of ['1.1', '1.10', '1.2'].
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A paginated list of refs matching any filter criteria that were provided.

        Raises:
            ApiError: If the repository is private and the authenticated user does not have access to it. The specified
                repository does not exist. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.get_repositories_by_workspace_by_repo_slug_refs(
                repo_slug, workspace, q=q, sort=sort, request_options=request_options
            ),
        )

    async def get_repositories_by_workspace_by_repo_slug_refs_branches(
        self,
        repo_slug: str,
        workspace: str,
        *,
        q: str | None = None,
        sort: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> PaginatedBranches:
        """Returns a list of all open branches within the specified repository. Results will be in the order the source
        control manager returns them.

        Branches support filtering and sorting that can be used to search for specific branches. For instance, to find
        all branches that have "stab" in their name:

        ```
        curl -s https://api.bitbucket.org/2.0/repositories/atlassian/aui/refs/branches -G --data-urlencode 'q=name ~
        "stab"'
        ```

        By default, results will be in the order the underlying source control system returns them and identical to the
        ordering one sees when running "$ git branch --list". Note that this follows simple lexical ordering of the ref
        names.

        This can be undesirable as it does apply any natural sorting semantics, meaning for instance that tags are
        sorted ["v10", "v11", "v9"] instead of ["v9", "v10", "v11"].

        Sorting can be changed using the ?q= query parameter. When using ?q=name to explicitly sort on ref name,
        Bitbucket will apply natural sorting and interpret numerical values as numbers instead of strings.

        Args:
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            q: Query string to narrow down the response as per `filtering and sorting
                </cloud/bitbucket/rest/intro/#filtering>`__.
            sort: Field by which the results should be sorted as per `filtering and sorting
                </cloud/bitbucket/rest/intro/#filtering>`__. The ``name`` field is handled specially for branches in
                that, if specified as the sort field, it uses a natural sort order instead of the default
                lexicographical sort order. For example, it will return ['branch1', 'branch2', 'branch10'] instead of
                ['branch1', 'branch10', 'branch2'].
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A paginated list of branches matching any filter criteria that were provided.

        Raises:
            ApiError: If the repository is private and the authenticated user does not have access to it. The specified
                repository does not exist. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.get_repositories_by_workspace_by_repo_slug_refs_branches(
                repo_slug, workspace, q=q, sort=sort, request_options=request_options
            ),
        )

    async def get_repositories_by_workspace_by_repo_slug_refs_branches_by_name(
        self, name: str, repo_slug: str, workspace: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> Branch:
        """Returns a branch object within the specified repository.

        This call requires authentication. Private repositories require the caller to authenticate with an account that
        has appropriate authorization.

        For Git, the branch name should not include any prefixes (e.g. refs/heads).

        Args:
            name: The name of the branch.
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The branch object.

        Raises:
            ApiError: If the repository is private and the authenticated user does not have access to it. The specified
                repository or branch does not exist. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.get_repositories_by_workspace_by_repo_slug_refs_branches_by_name(
                name, repo_slug, workspace, request_options=request_options
            ),
        )

    async def get_repositories_by_workspace_by_repo_slug_refs_tags(
        self,
        repo_slug: str,
        workspace: str,
        *,
        q: str | None = None,
        sort: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> PaginatedTags:
        """Returns the tags in the repository.

        By default, results will be in the order the underlying source control system returns them and identical to the
        ordering one sees when running "$ git tag --list". Note that this follows simple lexical ordering of the ref
        names.

        This can be undesirable as it does apply any natural sorting semantics, meaning for instance that tags are
        sorted ["v10", "v11", "v9"] instead of ["v9", "v10", "v11"].

        Sorting can be changed using the ?sort= query parameter. When using ?sort=name to explicitly sort on ref name,
        Bitbucket will apply natural sorting and interpret numerical values as numbers instead of strings.

        Args:
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            q: Query string to narrow down the response as per `filtering and sorting
                </cloud/bitbucket/rest/intro/#filtering>`__.
            sort: Field by which the results should be sorted as per `filtering and sorting
                </cloud/bitbucket/rest/intro/#filtering>`__. The ``name`` field is handled specially for tags in that,
                if specified as the sort field, it uses a natural sort order instead of the default lexicographical sort
                order. For example, it will return ['1.1', '1.2', '1.10'] instead of ['1.1', '1.10', '1.2'].
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A paginated list of tags matching any filter criteria that were provided.

        Raises:
            ApiError: If the repository is private and the authenticated user does not have access to it. The specified
                repository does not exist. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.get_repositories_by_workspace_by_repo_slug_refs_tags(
                repo_slug, workspace, q=q, sort=sort, request_options=request_options
            ),
        )

    async def get_repositories_by_workspace_by_repo_slug_refs_tags_by_name(
        self, name: str, repo_slug: str, workspace: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> TagModel:
        """Returns the specified tag.

        ```
        $ curl -s https://api.bitbucket.org/2.0/repositories/seanfarley/hg/refs/tags/3.8 -G | jq .
        {
        "name": "3.8", "links": { "commits": { "href":
        "https://api.bitbucket.org/2.0/repositories/seanfarley/hg/commits/3.8"
        },
        "self": { "href": "https://api.bitbucket.org/2.0/repositories/seanfarley/hg/refs/tags/3.8"
        },
        "html": { "href": "https://bitbucket.org/seanfarley/hg/commits/tag/3.8"
        }
        },
        "tagger": { "raw": "Matt Mackall ", "type": "author", "user": { "username": "mpmselenic", "nickname":
        "mpmselenic", "display_name": "Matt Mackall", "type": "user", "uuid": "{a4934530-db4c-419c-a478-9ab4964c2ee7}",
        "links": { "self": { "href": "https://api.bitbucket.org/2.0/users/mpmselenic"
        },
        "html": { "href": "https://bitbucket.org/mpmselenic/"
        },
        "avatar": { "href": "https://bitbucket.org/account/mpmselenic/avatar/32/"
        }
        }
        }
        },
        "date": "2016-05-01T18:52:25+00:00", "message": "Added tag 3.8 for changeset f85de28eae32", "type": "tag",
        "target": { "hash": "f85de28eae32e7d3064b1a1321309071bbaaa069", "repository": { "links": { "self": { "href":
        "https://api.bitbucket.org/2.0/repositories/seanfarley/hg"
        },
        "html": { "href": "https://bitbucket.org/seanfarley/hg"
        },
        "avatar": { "href": "https://bitbucket.org/seanfarley/hg/avatar/32/"
        }
        },
        "type": "repository", "name": "hg", "full_name": "seanfarley/hg", "uuid":
        "{c75687fb-e99d-4579-9087-190dbd406d30}"
        },
        "links": { "self": { "href":
        "https://api.bitbucket.org/2.0/repositories/seanfarley/hg/commit/f85de28eae32e7d3064b1a1321309071bbaaa069"
        },
        "comments": { "href":
        "https://api.bitbucket.org/2.0/repositories/seanfarley/hg/commit/f85de28eae32e7d3064b1a1321309071bbaaa069/comments"
        },
        "patch": { "href":
        "https://api.bitbucket.org/2.0/repositories/seanfarley/hg/patch/f85de28eae32e7d3064b1a1321309071bbaaa069"
        },
        "html": { "href": "https://bitbucket.org/seanfarley/hg/commits/f85de28eae32e7d3064b1a1321309071bbaaa069"
        },
        "diff": { "href":
        "https://api.bitbucket.org/2.0/repositories/seanfarley/hg/diff/f85de28eae32e7d3064b1a1321309071bbaaa069"
        },
        "approve": { "href":
        "https://api.bitbucket.org/2.0/repositories/seanfarley/hg/commit/f85de28eae32e7d3064b1a1321309071bbaaa069/approve"
        },
        "statuses": { "href":
        "https://api.bitbucket.org/2.0/repositories/seanfarley/hg/commit/f85de28eae32e7d3064b1a1321309071bbaaa069/statuses"
        }
        },
        "author": { "raw": "Sean Farley ", "type": "author", "user": { "username": "seanfarley", "nickname":
        "seanfarley", "display_name": "Sean Farley", "type": "user", "uuid": "{a295f8a8-5876-4d43-89b5-3ad8c6c3c51d}",
        "links": { "self": { "href": "https://api.bitbucket.org/2.0/users/seanfarley"
        },
        "html": { "href": "https://bitbucket.org/seanfarley/"
        },
        "avatar": { "href": "https://bitbucket.org/account/seanfarley/avatar/32/"
        }
        }
        }
        },
        "parents": [
        {
        "hash": "9a98d0e5b07fc60887f9d3d34d9ac7d536f470d2", "type": "commit", "links": { "self": { "href":
        "https://api.bitbucket.org/2.0/repositories/seanfarley/hg/commit/9a98d0e5b07fc60887f9d3d34d9ac7d536f470d2"
        },
        "html": { "href": "https://bitbucket.org/seanfarley/hg/commits/9a98d0e5b07fc60887f9d3d34d9ac7d536f470d2"
        }
        }
        }
        ],
        "date": "2016-05-01T04:21:17+00:00", "message": "debian: alphabetize build deps", "type": "commit"
        }
        }
        ```

        Args:
            name: The name of the tag.
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The tag object.

        Raises:
            ApiError: If the repository is private and the authenticated user does not have access to it. The specified
                repository or tag does not exist. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.get_repositories_by_workspace_by_repo_slug_refs_tags_by_name(
                name, repo_slug, workspace, request_options=request_options
            ),
        )

    async def post_repositories_by_workspace_by_repo_slug_refs_branches(
        self, repo_slug: str, workspace: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> Branch:
        r"""Creates a new branch in the specified repository.

        The payload of the POST should consist of a JSON document that contains the name of the tag and the target hash.

        ```
        curl https://api.bitbucket.org/2.0/repositories/seanfarley/hg/refs/branches \ -s -u seanfarley -X POST -H
        "Content-Type: application/json" \ -d '{ "name" : "smf/create-feature", "target" : { "hash" : "default",
        }
        }'
        ```

        This call requires authentication. Private repositories require the caller to authenticate with an account that
        has appropriate authorization.

        The branch name should not include any prefixes (e.g. refs/heads). This endpoint does support using short hash
        prefixes for the commit hash, but it may return a 400 response if the provided prefix is ambiguous. Using a full
        commit hash is the preferred approach.

        Args:
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The newly created branch object.

        Raises:
            ApiError: If the repository is private and the authenticated user does not have access to it. The specified
                repository or branch does not exist. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.post_repositories_by_workspace_by_repo_slug_refs_branches(
                repo_slug, workspace, request_options=request_options
            ),
        )

    async def post_repositories_by_workspace_by_repo_slug_refs_tags(
        self,
        repo_slug: str,
        workspace: str,
        body: TagModel | TagModelDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> TagModel:
        r"""Creates a new annotated tag in the specified repository.

        The payload of the POST should consist of a JSON document that contains the name of the tag and the target hash.

        ```
        curl https://api.bitbucket.org/2.0/repositories/jdoe/myrepo/refs/tags \ -s -u jdoe -X POST -H "Content-Type:
        application/json" \ -d '{ "name" : "new-tag-name", "target" : { "hash" : "a1b2c3d4e5f6",
        }
        }'
        ```

        This endpoint does support using short hash prefixes for the commit hash, but it may return a 400 response if
        the provided prefix is ambiguous. Using a full commit hash is the preferred approach.

        A message for the tag object may optionally be provided. If it is omitted or the provided message is empty, a
        default message of "Added tag for changeset " will be used.

        Args:
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The newly created tag.

        Raises:
            ApiError: If the target hash is missing, ambiguous, or invalid, or if the name is not provided. ``error`` is
                ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.post_repositories_by_workspace_by_repo_slug_refs_tags(
                repo_slug, workspace, body, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncRefsWithRawResponse:
        return self._with_raw_response


class RefsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def delete_repositories_by_workspace_by_repo_slug_refs_branches_by_name(
        self, name: str, repo_slug: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteRepositoriesByWorkspaceByRepoSlugRefsBranchesByNameErrorBody]:
        """Delete a branch in the specified repository.

        The main branch is not allowed to be deleted and will return a 400 response.

        The branch name should not include any prefixes (e.g. refs/heads).

        Args:
            name: The name of the branch.
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/repositories/{workspace}/{repo_slug}/refs/branches/{name}"),
            path_params=[
                param[str]("name", name), param[str]("repo_slug", repo_slug), param[str]("workspace", workspace)
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=empty_response,
            error_mapper=delete_repositories_by_workspace_by_repo_slug_refs_branches_by_name_error_mapper,
            request_options=request_options,
        )

    def delete_repositories_by_workspace_by_repo_slug_refs_tags_by_name(
        self, name: str, repo_slug: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteRepositoriesByWorkspaceByRepoSlugRefsTagsByNameErrorBody]:
        """Delete a tag in the specified repository.

        The tag name should not include any prefixes (e.g. refs/tags).

        Args:
            name: The name of the tag.
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/repositories/{workspace}/{repo_slug}/refs/tags/{name}"),
            path_params=[
                param[str]("name", name), param[str]("repo_slug", repo_slug), param[str]("workspace", workspace)
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=empty_response,
            error_mapper=delete_repositories_by_workspace_by_repo_slug_refs_tags_by_name_error_mapper,
            request_options=request_options,
        )

    def get_repositories_by_workspace_by_repo_slug_refs(
        self,
        repo_slug: str,
        workspace: str,
        *,
        q: str | None = None,
        sort: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[PaginatedRefs, GetRepositoriesByWorkspaceByRepoSlugRefsErrorBody]:
        """Returns the branches and tags in the repository.

        By default, results will be in the order the underlying source control system returns them and identical to the
        ordering one sees when running "$ git show-ref". Note that this follows simple lexical ordering of the ref
        names.

        This can be undesirable as it does apply any natural sorting semantics, meaning for instance that refs are
        sorted ["branch1", "branch10", "branch2", "v10", "v11", "v9"] instead of ["branch1", "branch2", "branch10",
        "v9", "v10", "v11"].

        Sorting can be changed using the ?sort= query parameter. When using ?sort=name to explicitly sort on ref name,
        Bitbucket will apply natural sorting and interpret numerical values as numbers instead of strings.

        Args:
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            q: Query string to narrow down the response as per `filtering and sorting
                </cloud/bitbucket/rest/intro/#filtering>`__.
            sort: Field by which the results should be sorted as per `filtering and sorting
                </cloud/bitbucket/rest/intro/#filtering>`__. The ``name`` field is handled specially for refs in that,
                if specified as the sort field, it uses a natural sort order instead of the default lexicographical sort
                order. For example, it will return ['1.1', '1.2', '1.10'] instead of ['1.1', '1.10', '1.2'].
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/repositories/{workspace}/{repo_slug}/refs"),
            path_params=[param[str]("repo_slug", repo_slug), param[str]("workspace", workspace)],
            query_params=[param[str | None]("q", q), param[str | None]("sort", sort)],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=json_decoder[PaginatedRefs],
            error_mapper=get_repositories_by_workspace_by_repo_slug_refs_error_mapper,
            request_options=request_options,
        )

    def get_repositories_by_workspace_by_repo_slug_refs_branches(
        self,
        repo_slug: str,
        workspace: str,
        *,
        q: str | None = None,
        sort: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[PaginatedBranches, GetRepositoriesByWorkspaceByRepoSlugRefsBranchesErrorBody]:
        """Returns a list of all open branches within the specified repository. Results will be in the order the source
        control manager returns them.

        Branches support filtering and sorting that can be used to search for specific branches. For instance, to find
        all branches that have "stab" in their name:

        ```
        curl -s https://api.bitbucket.org/2.0/repositories/atlassian/aui/refs/branches -G --data-urlencode 'q=name ~
        "stab"'
        ```

        By default, results will be in the order the underlying source control system returns them and identical to the
        ordering one sees when running "$ git branch --list". Note that this follows simple lexical ordering of the ref
        names.

        This can be undesirable as it does apply any natural sorting semantics, meaning for instance that tags are
        sorted ["v10", "v11", "v9"] instead of ["v9", "v10", "v11"].

        Sorting can be changed using the ?q= query parameter. When using ?q=name to explicitly sort on ref name,
        Bitbucket will apply natural sorting and interpret numerical values as numbers instead of strings.

        Args:
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            q: Query string to narrow down the response as per `filtering and sorting
                </cloud/bitbucket/rest/intro/#filtering>`__.
            sort: Field by which the results should be sorted as per `filtering and sorting
                </cloud/bitbucket/rest/intro/#filtering>`__. The ``name`` field is handled specially for branches in
                that, if specified as the sort field, it uses a natural sort order instead of the default
                lexicographical sort order. For example, it will return ['branch1', 'branch2', 'branch10'] instead of
                ['branch1', 'branch10', 'branch2'].
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/repositories/{workspace}/{repo_slug}/refs/branches"),
            path_params=[param[str]("repo_slug", repo_slug), param[str]("workspace", workspace)],
            query_params=[param[str | None]("q", q), param[str | None]("sort", sort)],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=json_decoder[PaginatedBranches],
            error_mapper=get_repositories_by_workspace_by_repo_slug_refs_branches_error_mapper,
            request_options=request_options,
        )

    def get_repositories_by_workspace_by_repo_slug_refs_branches_by_name(
        self, name: str, repo_slug: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Branch, GetRepositoriesByWorkspaceByRepoSlugRefsBranchesByNameErrorBody]:
        """Returns a branch object within the specified repository.

        This call requires authentication. Private repositories require the caller to authenticate with an account that
        has appropriate authorization.

        For Git, the branch name should not include any prefixes (e.g. refs/heads).

        Args:
            name: The name of the branch.
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/repositories/{workspace}/{repo_slug}/refs/branches/{name}"),
            path_params=[
                param[str]("name", name), param[str]("repo_slug", repo_slug), param[str]("workspace", workspace)
            ],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=json_decoder[Branch],
            error_mapper=get_repositories_by_workspace_by_repo_slug_refs_branches_by_name_error_mapper,
            request_options=request_options,
        )

    def get_repositories_by_workspace_by_repo_slug_refs_tags(
        self,
        repo_slug: str,
        workspace: str,
        *,
        q: str | None = None,
        sort: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[PaginatedTags, GetRepositoriesByWorkspaceByRepoSlugRefsTagsErrorBody]:
        """Returns the tags in the repository.

        By default, results will be in the order the underlying source control system returns them and identical to the
        ordering one sees when running "$ git tag --list". Note that this follows simple lexical ordering of the ref
        names.

        This can be undesirable as it does apply any natural sorting semantics, meaning for instance that tags are
        sorted ["v10", "v11", "v9"] instead of ["v9", "v10", "v11"].

        Sorting can be changed using the ?sort= query parameter. When using ?sort=name to explicitly sort on ref name,
        Bitbucket will apply natural sorting and interpret numerical values as numbers instead of strings.

        Args:
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            q: Query string to narrow down the response as per `filtering and sorting
                </cloud/bitbucket/rest/intro/#filtering>`__.
            sort: Field by which the results should be sorted as per `filtering and sorting
                </cloud/bitbucket/rest/intro/#filtering>`__. The ``name`` field is handled specially for tags in that,
                if specified as the sort field, it uses a natural sort order instead of the default lexicographical sort
                order. For example, it will return ['1.1', '1.2', '1.10'] instead of ['1.1', '1.10', '1.2'].
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/repositories/{workspace}/{repo_slug}/refs/tags"),
            path_params=[param[str]("repo_slug", repo_slug), param[str]("workspace", workspace)],
            query_params=[param[str | None]("q", q), param[str | None]("sort", sort)],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=json_decoder[PaginatedTags],
            error_mapper=get_repositories_by_workspace_by_repo_slug_refs_tags_error_mapper,
            request_options=request_options,
        )

    def get_repositories_by_workspace_by_repo_slug_refs_tags_by_name(
        self, name: str, repo_slug: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[TagModel, GetRepositoriesByWorkspaceByRepoSlugRefsTagsByNameErrorBody]:
        """Returns the specified tag.

        ```
        $ curl -s https://api.bitbucket.org/2.0/repositories/seanfarley/hg/refs/tags/3.8 -G | jq .
        {
        "name": "3.8", "links": { "commits": { "href":
        "https://api.bitbucket.org/2.0/repositories/seanfarley/hg/commits/3.8"
        },
        "self": { "href": "https://api.bitbucket.org/2.0/repositories/seanfarley/hg/refs/tags/3.8"
        },
        "html": { "href": "https://bitbucket.org/seanfarley/hg/commits/tag/3.8"
        }
        },
        "tagger": { "raw": "Matt Mackall ", "type": "author", "user": { "username": "mpmselenic", "nickname":
        "mpmselenic", "display_name": "Matt Mackall", "type": "user", "uuid": "{a4934530-db4c-419c-a478-9ab4964c2ee7}",
        "links": { "self": { "href": "https://api.bitbucket.org/2.0/users/mpmselenic"
        },
        "html": { "href": "https://bitbucket.org/mpmselenic/"
        },
        "avatar": { "href": "https://bitbucket.org/account/mpmselenic/avatar/32/"
        }
        }
        }
        },
        "date": "2016-05-01T18:52:25+00:00", "message": "Added tag 3.8 for changeset f85de28eae32", "type": "tag",
        "target": { "hash": "f85de28eae32e7d3064b1a1321309071bbaaa069", "repository": { "links": { "self": { "href":
        "https://api.bitbucket.org/2.0/repositories/seanfarley/hg"
        },
        "html": { "href": "https://bitbucket.org/seanfarley/hg"
        },
        "avatar": { "href": "https://bitbucket.org/seanfarley/hg/avatar/32/"
        }
        },
        "type": "repository", "name": "hg", "full_name": "seanfarley/hg", "uuid":
        "{c75687fb-e99d-4579-9087-190dbd406d30}"
        },
        "links": { "self": { "href":
        "https://api.bitbucket.org/2.0/repositories/seanfarley/hg/commit/f85de28eae32e7d3064b1a1321309071bbaaa069"
        },
        "comments": { "href":
        "https://api.bitbucket.org/2.0/repositories/seanfarley/hg/commit/f85de28eae32e7d3064b1a1321309071bbaaa069/comments"
        },
        "patch": { "href":
        "https://api.bitbucket.org/2.0/repositories/seanfarley/hg/patch/f85de28eae32e7d3064b1a1321309071bbaaa069"
        },
        "html": { "href": "https://bitbucket.org/seanfarley/hg/commits/f85de28eae32e7d3064b1a1321309071bbaaa069"
        },
        "diff": { "href":
        "https://api.bitbucket.org/2.0/repositories/seanfarley/hg/diff/f85de28eae32e7d3064b1a1321309071bbaaa069"
        },
        "approve": { "href":
        "https://api.bitbucket.org/2.0/repositories/seanfarley/hg/commit/f85de28eae32e7d3064b1a1321309071bbaaa069/approve"
        },
        "statuses": { "href":
        "https://api.bitbucket.org/2.0/repositories/seanfarley/hg/commit/f85de28eae32e7d3064b1a1321309071bbaaa069/statuses"
        }
        },
        "author": { "raw": "Sean Farley ", "type": "author", "user": { "username": "seanfarley", "nickname":
        "seanfarley", "display_name": "Sean Farley", "type": "user", "uuid": "{a295f8a8-5876-4d43-89b5-3ad8c6c3c51d}",
        "links": { "self": { "href": "https://api.bitbucket.org/2.0/users/seanfarley"
        },
        "html": { "href": "https://bitbucket.org/seanfarley/"
        },
        "avatar": { "href": "https://bitbucket.org/account/seanfarley/avatar/32/"
        }
        }
        }
        },
        "parents": [
        {
        "hash": "9a98d0e5b07fc60887f9d3d34d9ac7d536f470d2", "type": "commit", "links": { "self": { "href":
        "https://api.bitbucket.org/2.0/repositories/seanfarley/hg/commit/9a98d0e5b07fc60887f9d3d34d9ac7d536f470d2"
        },
        "html": { "href": "https://bitbucket.org/seanfarley/hg/commits/9a98d0e5b07fc60887f9d3d34d9ac7d536f470d2"
        }
        }
        }
        ],
        "date": "2016-05-01T04:21:17+00:00", "message": "debian: alphabetize build deps", "type": "commit"
        }
        }
        ```

        Args:
            name: The name of the tag.
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/repositories/{workspace}/{repo_slug}/refs/tags/{name}"),
            path_params=[
                param[str]("name", name), param[str]("repo_slug", repo_slug), param[str]("workspace", workspace)
            ],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=json_decoder[TagModel],
            error_mapper=get_repositories_by_workspace_by_repo_slug_refs_tags_by_name_error_mapper,
            request_options=request_options,
        )

    def post_repositories_by_workspace_by_repo_slug_refs_branches(
        self, repo_slug: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Branch, PostRepositoriesByWorkspaceByRepoSlugRefsBranchesErrorBody]:
        r"""Creates a new branch in the specified repository.

        The payload of the POST should consist of a JSON document that contains the name of the tag and the target hash.

        ```
        curl https://api.bitbucket.org/2.0/repositories/seanfarley/hg/refs/branches \ -s -u seanfarley -X POST -H
        "Content-Type: application/json" \ -d '{ "name" : "smf/create-feature", "target" : { "hash" : "default",
        }
        }'
        ```

        This call requires authentication. Private repositories require the caller to authenticate with an account that
        has appropriate authorization.

        The branch name should not include any prefixes (e.g. refs/heads). This endpoint does support using short hash
        prefixes for the commit hash, but it may return a 400 response if the provided prefix is ambiguous. Using a full
        commit hash is the preferred approach.

        Args:
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/repositories/{workspace}/{repo_slug}/refs/branches"),
            path_params=[param[str]("repo_slug", repo_slug), param[str]("workspace", workspace)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=json_decoder[Branch],
            error_mapper=post_repositories_by_workspace_by_repo_slug_refs_branches_error_mapper,
            request_options=request_options,
        )

    def post_repositories_by_workspace_by_repo_slug_refs_tags(
        self,
        repo_slug: str,
        workspace: str,
        body: TagModel | TagModelDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[TagModel, PostRepositoriesByWorkspaceByRepoSlugRefsTagsErrorBody]:
        r"""Creates a new annotated tag in the specified repository.

        The payload of the POST should consist of a JSON document that contains the name of the tag and the target hash.

        ```
        curl https://api.bitbucket.org/2.0/repositories/jdoe/myrepo/refs/tags \ -s -u jdoe -X POST -H "Content-Type:
        application/json" \ -d '{ "name" : "new-tag-name", "target" : { "hash" : "a1b2c3d4e5f6",
        }
        }'
        ```

        This endpoint does support using short hash prefixes for the commit hash, but it may return a 400 response if
        the provided prefix is ambiguous. Using a full commit hash is the preferred approach.

        A message for the tag object may optionally be provided. If it is omitted or the provided message is empty, a
        default message of "Added tag for changeset " will be used.

        Args:
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/repositories/{workspace}/{repo_slug}/refs/tags"),
            path_params=[param[str]("repo_slug", repo_slug), param[str]("workspace", workspace)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[TagModel | TagModelDict](body),
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=json_decoder[TagModel],
            error_mapper=post_repositories_by_workspace_by_repo_slug_refs_tags_error_mapper,
            request_options=request_options,
        )


class AsyncRefsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def delete_repositories_by_workspace_by_repo_slug_refs_branches_by_name(
        self, name: str, repo_slug: str, workspace: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteRepositoriesByWorkspaceByRepoSlugRefsBranchesByNameErrorBody]:
        """Delete a branch in the specified repository.

        The main branch is not allowed to be deleted and will return a 400 response.

        The branch name should not include any prefixes (e.g. refs/heads).

        Args:
            name: The name of the branch.
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/repositories/{workspace}/{repo_slug}/refs/branches/{name}"),
            path_params=[
                param[str]("name", name), param[str]("repo_slug", repo_slug), param[str]("workspace", workspace)
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_empty_response,
            error_mapper=delete_repositories_by_workspace_by_repo_slug_refs_branches_by_name_error_mapper,
            request_options=request_options,
        )

    async def delete_repositories_by_workspace_by_repo_slug_refs_tags_by_name(
        self, name: str, repo_slug: str, workspace: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteRepositoriesByWorkspaceByRepoSlugRefsTagsByNameErrorBody]:
        """Delete a tag in the specified repository.

        The tag name should not include any prefixes (e.g. refs/tags).

        Args:
            name: The name of the tag.
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/repositories/{workspace}/{repo_slug}/refs/tags/{name}"),
            path_params=[
                param[str]("name", name), param[str]("repo_slug", repo_slug), param[str]("workspace", workspace)
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_empty_response,
            error_mapper=delete_repositories_by_workspace_by_repo_slug_refs_tags_by_name_error_mapper,
            request_options=request_options,
        )

    async def get_repositories_by_workspace_by_repo_slug_refs(
        self,
        repo_slug: str,
        workspace: str,
        *,
        q: str | None = None,
        sort: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[PaginatedRefs, GetRepositoriesByWorkspaceByRepoSlugRefsErrorBody]:
        """Returns the branches and tags in the repository.

        By default, results will be in the order the underlying source control system returns them and identical to the
        ordering one sees when running "$ git show-ref". Note that this follows simple lexical ordering of the ref
        names.

        This can be undesirable as it does apply any natural sorting semantics, meaning for instance that refs are
        sorted ["branch1", "branch10", "branch2", "v10", "v11", "v9"] instead of ["branch1", "branch2", "branch10",
        "v9", "v10", "v11"].

        Sorting can be changed using the ?sort= query parameter. When using ?sort=name to explicitly sort on ref name,
        Bitbucket will apply natural sorting and interpret numerical values as numbers instead of strings.

        Args:
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            q: Query string to narrow down the response as per `filtering and sorting
                </cloud/bitbucket/rest/intro/#filtering>`__.
            sort: Field by which the results should be sorted as per `filtering and sorting
                </cloud/bitbucket/rest/intro/#filtering>`__. The ``name`` field is handled specially for refs in that,
                if specified as the sort field, it uses a natural sort order instead of the default lexicographical sort
                order. For example, it will return ['1.1', '1.2', '1.10'] instead of ['1.1', '1.10', '1.2'].
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/repositories/{workspace}/{repo_slug}/refs"),
            path_params=[param[str]("repo_slug", repo_slug), param[str]("workspace", workspace)],
            query_params=[param[str | None]("q", q), param[str | None]("sort", sort)],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_json_decoder[PaginatedRefs],
            error_mapper=get_repositories_by_workspace_by_repo_slug_refs_error_mapper,
            request_options=request_options,
        )

    async def get_repositories_by_workspace_by_repo_slug_refs_branches(
        self,
        repo_slug: str,
        workspace: str,
        *,
        q: str | None = None,
        sort: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[PaginatedBranches, GetRepositoriesByWorkspaceByRepoSlugRefsBranchesErrorBody]:
        """Returns a list of all open branches within the specified repository. Results will be in the order the source
        control manager returns them.

        Branches support filtering and sorting that can be used to search for specific branches. For instance, to find
        all branches that have "stab" in their name:

        ```
        curl -s https://api.bitbucket.org/2.0/repositories/atlassian/aui/refs/branches -G --data-urlencode 'q=name ~
        "stab"'
        ```

        By default, results will be in the order the underlying source control system returns them and identical to the
        ordering one sees when running "$ git branch --list". Note that this follows simple lexical ordering of the ref
        names.

        This can be undesirable as it does apply any natural sorting semantics, meaning for instance that tags are
        sorted ["v10", "v11", "v9"] instead of ["v9", "v10", "v11"].

        Sorting can be changed using the ?q= query parameter. When using ?q=name to explicitly sort on ref name,
        Bitbucket will apply natural sorting and interpret numerical values as numbers instead of strings.

        Args:
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            q: Query string to narrow down the response as per `filtering and sorting
                </cloud/bitbucket/rest/intro/#filtering>`__.
            sort: Field by which the results should be sorted as per `filtering and sorting
                </cloud/bitbucket/rest/intro/#filtering>`__. The ``name`` field is handled specially for branches in
                that, if specified as the sort field, it uses a natural sort order instead of the default
                lexicographical sort order. For example, it will return ['branch1', 'branch2', 'branch10'] instead of
                ['branch1', 'branch10', 'branch2'].
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/repositories/{workspace}/{repo_slug}/refs/branches"),
            path_params=[param[str]("repo_slug", repo_slug), param[str]("workspace", workspace)],
            query_params=[param[str | None]("q", q), param[str | None]("sort", sort)],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_json_decoder[PaginatedBranches],
            error_mapper=get_repositories_by_workspace_by_repo_slug_refs_branches_error_mapper,
            request_options=request_options,
        )

    async def get_repositories_by_workspace_by_repo_slug_refs_branches_by_name(
        self, name: str, repo_slug: str, workspace: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Branch, GetRepositoriesByWorkspaceByRepoSlugRefsBranchesByNameErrorBody]:
        """Returns a branch object within the specified repository.

        This call requires authentication. Private repositories require the caller to authenticate with an account that
        has appropriate authorization.

        For Git, the branch name should not include any prefixes (e.g. refs/heads).

        Args:
            name: The name of the branch.
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/repositories/{workspace}/{repo_slug}/refs/branches/{name}"),
            path_params=[
                param[str]("name", name), param[str]("repo_slug", repo_slug), param[str]("workspace", workspace)
            ],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_json_decoder[Branch],
            error_mapper=get_repositories_by_workspace_by_repo_slug_refs_branches_by_name_error_mapper,
            request_options=request_options,
        )

    async def get_repositories_by_workspace_by_repo_slug_refs_tags(
        self,
        repo_slug: str,
        workspace: str,
        *,
        q: str | None = None,
        sort: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[PaginatedTags, GetRepositoriesByWorkspaceByRepoSlugRefsTagsErrorBody]:
        """Returns the tags in the repository.

        By default, results will be in the order the underlying source control system returns them and identical to the
        ordering one sees when running "$ git tag --list". Note that this follows simple lexical ordering of the ref
        names.

        This can be undesirable as it does apply any natural sorting semantics, meaning for instance that tags are
        sorted ["v10", "v11", "v9"] instead of ["v9", "v10", "v11"].

        Sorting can be changed using the ?sort= query parameter. When using ?sort=name to explicitly sort on ref name,
        Bitbucket will apply natural sorting and interpret numerical values as numbers instead of strings.

        Args:
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            q: Query string to narrow down the response as per `filtering and sorting
                </cloud/bitbucket/rest/intro/#filtering>`__.
            sort: Field by which the results should be sorted as per `filtering and sorting
                </cloud/bitbucket/rest/intro/#filtering>`__. The ``name`` field is handled specially for tags in that,
                if specified as the sort field, it uses a natural sort order instead of the default lexicographical sort
                order. For example, it will return ['1.1', '1.2', '1.10'] instead of ['1.1', '1.10', '1.2'].
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/repositories/{workspace}/{repo_slug}/refs/tags"),
            path_params=[param[str]("repo_slug", repo_slug), param[str]("workspace", workspace)],
            query_params=[param[str | None]("q", q), param[str | None]("sort", sort)],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_json_decoder[PaginatedTags],
            error_mapper=get_repositories_by_workspace_by_repo_slug_refs_tags_error_mapper,
            request_options=request_options,
        )

    async def get_repositories_by_workspace_by_repo_slug_refs_tags_by_name(
        self, name: str, repo_slug: str, workspace: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[TagModel, GetRepositoriesByWorkspaceByRepoSlugRefsTagsByNameErrorBody]:
        """Returns the specified tag.

        ```
        $ curl -s https://api.bitbucket.org/2.0/repositories/seanfarley/hg/refs/tags/3.8 -G | jq .
        {
        "name": "3.8", "links": { "commits": { "href":
        "https://api.bitbucket.org/2.0/repositories/seanfarley/hg/commits/3.8"
        },
        "self": { "href": "https://api.bitbucket.org/2.0/repositories/seanfarley/hg/refs/tags/3.8"
        },
        "html": { "href": "https://bitbucket.org/seanfarley/hg/commits/tag/3.8"
        }
        },
        "tagger": { "raw": "Matt Mackall ", "type": "author", "user": { "username": "mpmselenic", "nickname":
        "mpmselenic", "display_name": "Matt Mackall", "type": "user", "uuid": "{a4934530-db4c-419c-a478-9ab4964c2ee7}",
        "links": { "self": { "href": "https://api.bitbucket.org/2.0/users/mpmselenic"
        },
        "html": { "href": "https://bitbucket.org/mpmselenic/"
        },
        "avatar": { "href": "https://bitbucket.org/account/mpmselenic/avatar/32/"
        }
        }
        }
        },
        "date": "2016-05-01T18:52:25+00:00", "message": "Added tag 3.8 for changeset f85de28eae32", "type": "tag",
        "target": { "hash": "f85de28eae32e7d3064b1a1321309071bbaaa069", "repository": { "links": { "self": { "href":
        "https://api.bitbucket.org/2.0/repositories/seanfarley/hg"
        },
        "html": { "href": "https://bitbucket.org/seanfarley/hg"
        },
        "avatar": { "href": "https://bitbucket.org/seanfarley/hg/avatar/32/"
        }
        },
        "type": "repository", "name": "hg", "full_name": "seanfarley/hg", "uuid":
        "{c75687fb-e99d-4579-9087-190dbd406d30}"
        },
        "links": { "self": { "href":
        "https://api.bitbucket.org/2.0/repositories/seanfarley/hg/commit/f85de28eae32e7d3064b1a1321309071bbaaa069"
        },
        "comments": { "href":
        "https://api.bitbucket.org/2.0/repositories/seanfarley/hg/commit/f85de28eae32e7d3064b1a1321309071bbaaa069/comments"
        },
        "patch": { "href":
        "https://api.bitbucket.org/2.0/repositories/seanfarley/hg/patch/f85de28eae32e7d3064b1a1321309071bbaaa069"
        },
        "html": { "href": "https://bitbucket.org/seanfarley/hg/commits/f85de28eae32e7d3064b1a1321309071bbaaa069"
        },
        "diff": { "href":
        "https://api.bitbucket.org/2.0/repositories/seanfarley/hg/diff/f85de28eae32e7d3064b1a1321309071bbaaa069"
        },
        "approve": { "href":
        "https://api.bitbucket.org/2.0/repositories/seanfarley/hg/commit/f85de28eae32e7d3064b1a1321309071bbaaa069/approve"
        },
        "statuses": { "href":
        "https://api.bitbucket.org/2.0/repositories/seanfarley/hg/commit/f85de28eae32e7d3064b1a1321309071bbaaa069/statuses"
        }
        },
        "author": { "raw": "Sean Farley ", "type": "author", "user": { "username": "seanfarley", "nickname":
        "seanfarley", "display_name": "Sean Farley", "type": "user", "uuid": "{a295f8a8-5876-4d43-89b5-3ad8c6c3c51d}",
        "links": { "self": { "href": "https://api.bitbucket.org/2.0/users/seanfarley"
        },
        "html": { "href": "https://bitbucket.org/seanfarley/"
        },
        "avatar": { "href": "https://bitbucket.org/account/seanfarley/avatar/32/"
        }
        }
        }
        },
        "parents": [
        {
        "hash": "9a98d0e5b07fc60887f9d3d34d9ac7d536f470d2", "type": "commit", "links": { "self": { "href":
        "https://api.bitbucket.org/2.0/repositories/seanfarley/hg/commit/9a98d0e5b07fc60887f9d3d34d9ac7d536f470d2"
        },
        "html": { "href": "https://bitbucket.org/seanfarley/hg/commits/9a98d0e5b07fc60887f9d3d34d9ac7d536f470d2"
        }
        }
        }
        ],
        "date": "2016-05-01T04:21:17+00:00", "message": "debian: alphabetize build deps", "type": "commit"
        }
        }
        ```

        Args:
            name: The name of the tag.
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/repositories/{workspace}/{repo_slug}/refs/tags/{name}"),
            path_params=[
                param[str]("name", name), param[str]("repo_slug", repo_slug), param[str]("workspace", workspace)
            ],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_json_decoder[TagModel],
            error_mapper=get_repositories_by_workspace_by_repo_slug_refs_tags_by_name_error_mapper,
            request_options=request_options,
        )

    async def post_repositories_by_workspace_by_repo_slug_refs_branches(
        self, repo_slug: str, workspace: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Branch, PostRepositoriesByWorkspaceByRepoSlugRefsBranchesErrorBody]:
        r"""Creates a new branch in the specified repository.

        The payload of the POST should consist of a JSON document that contains the name of the tag and the target hash.

        ```
        curl https://api.bitbucket.org/2.0/repositories/seanfarley/hg/refs/branches \ -s -u seanfarley -X POST -H
        "Content-Type: application/json" \ -d '{ "name" : "smf/create-feature", "target" : { "hash" : "default",
        }
        }'
        ```

        This call requires authentication. Private repositories require the caller to authenticate with an account that
        has appropriate authorization.

        The branch name should not include any prefixes (e.g. refs/heads). This endpoint does support using short hash
        prefixes for the commit hash, but it may return a 400 response if the provided prefix is ambiguous. Using a full
        commit hash is the preferred approach.

        Args:
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/repositories/{workspace}/{repo_slug}/refs/branches"),
            path_params=[param[str]("repo_slug", repo_slug), param[str]("workspace", workspace)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_json_decoder[Branch],
            error_mapper=post_repositories_by_workspace_by_repo_slug_refs_branches_error_mapper,
            request_options=request_options,
        )

    async def post_repositories_by_workspace_by_repo_slug_refs_tags(
        self,
        repo_slug: str,
        workspace: str,
        body: TagModel | TagModelDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[TagModel, PostRepositoriesByWorkspaceByRepoSlugRefsTagsErrorBody]:
        r"""Creates a new annotated tag in the specified repository.

        The payload of the POST should consist of a JSON document that contains the name of the tag and the target hash.

        ```
        curl https://api.bitbucket.org/2.0/repositories/jdoe/myrepo/refs/tags \ -s -u jdoe -X POST -H "Content-Type:
        application/json" \ -d '{ "name" : "new-tag-name", "target" : { "hash" : "a1b2c3d4e5f6",
        }
        }'
        ```

        This endpoint does support using short hash prefixes for the commit hash, but it may return a 400 response if
        the provided prefix is ambiguous. Using a full commit hash is the preferred approach.

        A message for the tag object may optionally be provided. If it is omitted or the provided message is empty, a
        default message of "Added tag for changeset " will be used.

        Args:
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/repositories/{workspace}/{repo_slug}/refs/tags"),
            path_params=[param[str]("repo_slug", repo_slug), param[str]("workspace", workspace)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[TagModel | TagModelDict](body),
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_json_decoder[TagModel],
            error_mapper=post_repositories_by_workspace_by_repo_slug_refs_tags_error_mapper,
            request_options=request_options,
        )
