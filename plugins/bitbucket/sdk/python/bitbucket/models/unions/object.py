from __future__ import annotations

from typing import TypeAlias

from ..account import Account, AccountDict
from ..account1 import Account1, Account1Dict
from ..author import Author, AuthorDict
from ..base_commit import BaseCommit, BaseCommitDict
from ..branching_model import BranchingModel, BranchingModelDict
from ..branching_model_settings import BranchingModelSettings, BranchingModelSettingsDict
from ..branchrestriction import Branchrestriction, BranchrestrictionDict
from ..comment import Comment, CommentDict
from ..comment_bitbucket_issue_tracker_api import CommentBitbucketIssueTrackerApi, CommentBitbucketIssueTrackerApiDict
from ..comment_bitbucket_pullrequests_api import CommentBitbucketPullrequestsApi, CommentBitbucketPullrequestsApiDict
from ..commit import Commit, CommitDict
from ..commit2 import Commit2, Commit2Dict
from ..commit_comment import CommitComment, CommitCommentDict
from ..commitstatus import Commitstatus, CommitstatusDict
from ..commitstatus_bitbucket_pullrequests_api import (
    CommitstatusBitbucketPullrequestsApi,
    CommitstatusBitbucketPullrequestsApiDict,
)
from ..committer import Committer, CommitterDict
from ..component import Component, ComponentDict
from ..deploy_key import DeployKey, DeployKeyDict
from ..deployment import Deployment, DeploymentDict
from ..deployment_environment import DeploymentEnvironment, DeploymentEnvironmentDict
from ..deployment_environment1 import DeploymentEnvironment1, DeploymentEnvironment1Dict
from ..deployment_release import DeploymentRelease, DeploymentReleaseDict
from ..deployment_release1 import DeploymentRelease1, DeploymentRelease1Dict
from ..deployment_variable import DeploymentVariable, DeploymentVariableDict
from ..effective_repo_branching_model import EffectiveRepoBranchingModel, EffectiveRepoBranchingModelDict
from ..gpg_account_key import GpgAccountKey, GpgAccountKeyDict
from ..group import Group, GroupDict
from ..group_bitbucket_repositories_api import GroupBitbucketRepositoriesApi, GroupBitbucketRepositoriesApiDict
from ..issue import Issue, IssueDict
from ..issue_attachment import IssueAttachment, IssueAttachmentDict
from ..issue_comment import IssueComment, IssueCommentDict
from ..milestone import Milestone, MilestoneDict
from ..participant import Participant, ParticipantDict
from ..pipeline import Pipeline, PipelineDict
from ..pipeline_build_number import PipelineBuildNumber, PipelineBuildNumberDict
from ..pipeline_cache import PipelineCache, PipelineCacheDict
from ..pipeline_known_host import PipelineKnownHost, PipelineKnownHostDict
from ..pipeline_ref_target import PipelineRefTarget, PipelineRefTargetDict
from ..pipeline_ref_target1 import PipelineRefTarget1, PipelineRefTarget1Dict
from ..pipeline_runner import PipelineRunner, PipelineRunnerDict
from ..pipeline_runner_oauth_client import PipelineRunnerOauthClient, PipelineRunnerOauthClientDict
from ..pipeline_runner_oauth_client2 import PipelineRunnerOauthClient2, PipelineRunnerOauthClient2Dict
from ..pipeline_runner_state import PipelineRunnerState, PipelineRunnerStateDict
from ..pipeline_runner_state2 import PipelineRunnerState2, PipelineRunnerState2Dict
from ..pipeline_runner_version import PipelineRunnerVersion, PipelineRunnerVersionDict
from ..pipeline_runner_version2 import PipelineRunnerVersion2, PipelineRunnerVersion2Dict
from ..pipeline_schedule import PipelineSchedule, PipelineScheduleDict
from ..pipeline_schedule_post_request_body import PipelineSchedulePostRequestBody, PipelineSchedulePostRequestBodyDict
from ..pipeline_schedule_put_request_body import PipelineSchedulePutRequestBody, PipelineSchedulePutRequestBodyDict
from ..pipeline_selector import PipelineSelector, PipelineSelectorDict
from ..pipeline_ssh_key_pair import PipelineSshKeyPair, PipelineSshKeyPairDict
from ..pipeline_ssh_public_key import PipelineSshPublicKey, PipelineSshPublicKeyDict
from ..pipeline_ssh_public_key2 import PipelineSshPublicKey2, PipelineSshPublicKey2Dict
from ..pipeline_step import PipelineStep, PipelineStepDict
from ..pipeline_variable import PipelineVariable, PipelineVariableDict
from ..pipelines_config import PipelinesConfig, PipelinesConfigDict
from ..pipelines_links_section_href import PipelinesLinksSectionHref, PipelinesLinksSectionHrefDict
from ..pipelines_links_section_href1 import PipelinesLinksSectionHref1, PipelinesLinksSectionHref1Dict
from ..pipelines_links_section_href3 import PipelinesLinksSectionHref3, PipelinesLinksSectionHref3Dict
from ..pipelines_pipeline_links import PipelinesPipelineLinks, PipelinesPipelineLinksDict
from ..project import Project, ProjectDict
from ..project_bitbucket_deployments_api import ProjectBitbucketDeploymentsApi, ProjectBitbucketDeploymentsApiDict
from ..project_bitbucket_issue_tracker_api import ProjectBitbucketIssueTrackerApi, ProjectBitbucketIssueTrackerApiDict
from ..project_bitbucket_projects_api import ProjectBitbucketProjectsApi, ProjectBitbucketProjectsApiDict
from ..project_branching_model import ProjectBranchingModel, ProjectBranchingModelDict
from ..project_deploy_key import ProjectDeployKey, ProjectDeployKeyDict
from ..pullrequest import Pullrequest, PullrequestDict
from ..pullrequest_bitbucket_workspaces_api import (
    PullrequestBitbucketWorkspacesApi,
    PullrequestBitbucketWorkspacesApiDict,
)
from ..pullrequest_comment import PullrequestComment, PullrequestCommentDict
from ..report import Report, ReportDict
from ..report_annotation import ReportAnnotation, ReportAnnotationDict
from ..report_annotation_bitbucket_reports_api import (
    ReportAnnotationBitbucketReportsApi,
    ReportAnnotationBitbucketReportsApiDict,
)
from ..report_bitbucket_reports_api import ReportBitbucketReportsApi, ReportBitbucketReportsApiDict
from ..repository import Repository, RepositoryDict
from ..repository_bitbucket_commits_api import RepositoryBitbucketCommitsApi, RepositoryBitbucketCommitsApiDict
from ..repository_bitbucket_deployments_api import (
    RepositoryBitbucketDeploymentsApi,
    RepositoryBitbucketDeploymentsApiDict,
)
from ..repository_bitbucket_issue_tracker_api import (
    RepositoryBitbucketIssueTrackerApi,
    RepositoryBitbucketIssueTrackerApiDict,
)
from ..repository_bitbucket_pipelines_api import RepositoryBitbucketPipelinesApi, RepositoryBitbucketPipelinesApiDict
from ..repository_bitbucket_pullrequests_api import (
    RepositoryBitbucketPullrequestsApi,
    RepositoryBitbucketPullrequestsApiDict,
)
from ..repository_bitbucket_refs_api import RepositoryBitbucketRefsApi, RepositoryBitbucketRefsApiDict
from ..repository_bitbucket_repositories_api import (
    RepositoryBitbucketRepositoriesApi,
    RepositoryBitbucketRepositoriesApiDict,
)
from ..repository_bitbucket_search_api import RepositoryBitbucketSearchApi, RepositoryBitbucketSearchApiDict
from ..repository_bitbucket_source_api import RepositoryBitbucketSourceApi, RepositoryBitbucketSourceApiDict
from ..repository_bitbucket_workspaces_api import RepositoryBitbucketWorkspacesApi, RepositoryBitbucketWorkspacesApiDict
from ..snippet import Snippet, SnippetDict
from ..snippet_comment import SnippetComment, SnippetCommentDict
from ..snippet_commit import SnippetCommit, SnippetCommitDict
from ..ssh_account_key import SshAccountKey, SshAccountKeyDict
from ..ssh_key import SshKey, SshKeyDict
from ..team import Team, TeamDict
from ..user import User, UserDict
from ..version import Version, VersionDict
from ..webhook_subscription import WebhookSubscription, WebhookSubscriptionDict
from ..workspace import Workspace, WorkspaceDict
from ..workspace_access import WorkspaceAccess, WorkspaceAccessDict
from ..workspace_base import WorkspaceBase, WorkspaceBaseDict
from ..workspace_bitbucket_repositories_api import (
    WorkspaceBitbucketRepositoriesApi,
    WorkspaceBitbucketRepositoriesApiDict,
)
from ..workspace_bitbucket_workspaces_api import WorkspaceBitbucketWorkspacesApi, WorkspaceBitbucketWorkspacesApiDict
from ..workspace_membership import WorkspaceMembership, WorkspaceMembershipDict

Object: TypeAlias = (
    Account
    | Workspace
    | Branchrestriction
    | Group
    | ProjectBranchingModel
    | BranchingModel
    | BaseCommit
    | BranchingModelSettings
    | Participant
    | Team
    | Author
    | Project
    | EffectiveRepoBranchingModel
    | Committer
    | Commit
    | Repository
    | Commitstatus
    | Comment
    | ReportAnnotation
    | Report
    | CommitComment
    | RepositoryBitbucketCommitsApi
    | DeploymentEnvironment
    | DeploymentRelease
    | ProjectDeployKey
    | DeployKey
    | Deployment
    | ProjectBitbucketDeploymentsApi
    | RepositoryBitbucketDeploymentsApi
    | Commit2
    | DeploymentEnvironment1
    | DeploymentRelease1
    | GpgAccountKey
    | CommentBitbucketIssueTrackerApi
    | Milestone
    | Component
    | Issue
    | IssueComment
    | ProjectBitbucketIssueTrackerApi
    | IssueAttachment
    | Version
    | RepositoryBitbucketIssueTrackerApi
    | PipelinesPipelineLinks
    | PipelinesLinksSectionHref
    | PipelineRefTarget
    | PipelinesConfig
    | PipelineRunnerOauthClient
    | Pipeline
    | PipelineKnownHost
    | PipelineSshPublicKey
    | PipelineSchedule
    | PipelineCache
    | PipelineStep
    | PipelineSshKeyPair
    | PipelineRunnerState
    | PipelineRunnerVersion
    | PipelineBuildNumber
    | PipelineSchedulePutRequestBody
    | PipelineSelector
    | DeploymentVariable
    | PipelineVariable
    | PipelineRunner
    | RepositoryBitbucketPipelinesApi
    | PipelineSchedulePostRequestBody
    | Account1
    | PipelineRefTarget1
    | PipelineRunnerOauthClient2
    | PipelineRunnerState2
    | PipelineRunnerVersion2
    | PipelineSshPublicKey2
    | PipelinesLinksSectionHref1
    | PipelinesLinksSectionHref3
    | ProjectBitbucketProjectsApi
    | User
    | Pullrequest
    | CommentBitbucketPullrequestsApi
    | PullrequestComment
    | CommitstatusBitbucketPullrequestsApi
    | RepositoryBitbucketPullrequestsApi
    | RepositoryBitbucketRefsApi
    | ReportAnnotationBitbucketReportsApi
    | ReportBitbucketReportsApi
    | WebhookSubscription
    | WorkspaceBitbucketRepositoriesApi
    | GroupBitbucketRepositoriesApi
    | RepositoryBitbucketRepositoriesApi
    | RepositoryBitbucketSearchApi
    | Snippet
    | SnippetCommit
    | SnippetComment
    | RepositoryBitbucketSourceApi
    | SshAccountKey
    | SshKey
    | PullrequestBitbucketWorkspacesApi
    | WorkspaceBitbucketWorkspacesApi
    | WorkspaceAccess
    | WorkspaceMembership
    | WorkspaceBase
    | RepositoryBitbucketWorkspacesApi
)
"""Base type for most resource objects. It defines the common ``type`` element that identifies an object's type. It also
identifies the element as Swagger's ``discriminator``."""

ObjectDict: TypeAlias = (
    AccountDict
    | WorkspaceDict
    | BranchrestrictionDict
    | GroupDict
    | ProjectBranchingModelDict
    | BranchingModelDict
    | BaseCommitDict
    | BranchingModelSettingsDict
    | ParticipantDict
    | TeamDict
    | AuthorDict
    | ProjectDict
    | EffectiveRepoBranchingModelDict
    | CommitterDict
    | CommitDict
    | RepositoryDict
    | CommitstatusDict
    | CommentDict
    | ReportAnnotationDict
    | ReportDict
    | CommitCommentDict
    | RepositoryBitbucketCommitsApiDict
    | DeploymentEnvironmentDict
    | DeploymentReleaseDict
    | ProjectDeployKeyDict
    | DeployKeyDict
    | DeploymentDict
    | ProjectBitbucketDeploymentsApiDict
    | RepositoryBitbucketDeploymentsApiDict
    | Commit2Dict
    | DeploymentEnvironment1Dict
    | DeploymentRelease1Dict
    | GpgAccountKeyDict
    | CommentBitbucketIssueTrackerApiDict
    | MilestoneDict
    | ComponentDict
    | IssueDict
    | IssueCommentDict
    | ProjectBitbucketIssueTrackerApiDict
    | IssueAttachmentDict
    | VersionDict
    | RepositoryBitbucketIssueTrackerApiDict
    | PipelinesPipelineLinksDict
    | PipelinesLinksSectionHrefDict
    | PipelineRefTargetDict
    | PipelinesConfigDict
    | PipelineRunnerOauthClientDict
    | PipelineDict
    | PipelineKnownHostDict
    | PipelineSshPublicKeyDict
    | PipelineScheduleDict
    | PipelineCacheDict
    | PipelineStepDict
    | PipelineSshKeyPairDict
    | PipelineRunnerStateDict
    | PipelineRunnerVersionDict
    | PipelineBuildNumberDict
    | PipelineSchedulePutRequestBodyDict
    | PipelineSelectorDict
    | DeploymentVariableDict
    | PipelineVariableDict
    | PipelineRunnerDict
    | RepositoryBitbucketPipelinesApiDict
    | PipelineSchedulePostRequestBodyDict
    | Account1Dict
    | PipelineRefTarget1Dict
    | PipelineRunnerOauthClient2Dict
    | PipelineRunnerState2Dict
    | PipelineRunnerVersion2Dict
    | PipelineSshPublicKey2Dict
    | PipelinesLinksSectionHref1Dict
    | PipelinesLinksSectionHref3Dict
    | ProjectBitbucketProjectsApiDict
    | UserDict
    | PullrequestDict
    | CommentBitbucketPullrequestsApiDict
    | PullrequestCommentDict
    | CommitstatusBitbucketPullrequestsApiDict
    | RepositoryBitbucketPullrequestsApiDict
    | RepositoryBitbucketRefsApiDict
    | ReportAnnotationBitbucketReportsApiDict
    | ReportBitbucketReportsApiDict
    | WebhookSubscriptionDict
    | WorkspaceBitbucketRepositoriesApiDict
    | GroupBitbucketRepositoriesApiDict
    | RepositoryBitbucketRepositoriesApiDict
    | RepositoryBitbucketSearchApiDict
    | SnippetDict
    | SnippetCommitDict
    | SnippetCommentDict
    | RepositoryBitbucketSourceApiDict
    | SshAccountKeyDict
    | SshKeyDict
    | PullrequestBitbucketWorkspacesApiDict
    | WorkspaceBitbucketWorkspacesApiDict
    | WorkspaceAccessDict
    | WorkspaceMembershipDict
    | WorkspaceBaseDict
    | RepositoryBitbucketWorkspacesApiDict
)
