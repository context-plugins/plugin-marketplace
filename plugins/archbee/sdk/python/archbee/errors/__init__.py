from .create_space_group_error import CreateSpaceGroupErrorBody, create_space_group_error_mapper
from .delete_a_file_manager_file_error import DeleteAFileManagerFileErrorBody, delete_a_file_manager_file_error_mapper
from .delete_document_error import DeleteDocumentErrorBody, delete_document_error_mapper
from .delete_space_group_error import DeleteSpaceGroupErrorBody, delete_space_group_error_mapper
from .discard_suggestion_document_error import (
    DiscardSuggestionDocumentErrorBody,
    discard_suggestion_document_error_mapper,
)
from .get_document_error import GetDocumentErrorBody, get_document_error_mapper
from .import_content_error import ImportContentErrorBody, import_content_error_mapper
from .info_open_api_document_error import InfoOpenApiDocumentErrorBody, info_open_api_document_error_mapper
from .list_file_manager_files_error import ListFileManagerFilesErrorBody, list_file_manager_files_error_mapper
from .merge_suggestion_into_main_document_error import (
    MergeSuggestionIntoMainDocumentErrorBody,
    merge_suggestion_into_main_document_error_mapper,
)
from .move_a_file_manager_file_error import MoveAFileManagerFileErrorBody, move_a_file_manager_file_error_mapper
from .organization_display_rules_error import OrganizationDisplayRulesErrorBody, organization_display_rules_error_mapper
from .organization_export_error import OrganizationExportErrorBody, organization_export_error_mapper
from .overwrite_a_file_manager_file_error import (
    OverwriteAFileManagerFileErrorBody,
    overwrite_a_file_manager_file_error_mapper,
)
from .request_magic_link_access_error import RequestMagicLinkAccessErrorBody, request_magic_link_access_error_mapper
from .search_document_error import SearchDocumentErrorBody, search_document_error_mapper
from .sync_open_api_document_error import SyncOpenApiDocumentErrorBody, sync_open_api_document_error_mapper
from .update_create_document_error import UpdateCreateDocumentErrorBody, update_create_document_error_mapper
from .upload_single_file_error import UploadSingleFileErrorBody, upload_single_file_error_mapper

__all__ = [
    "CreateSpaceGroupErrorBody",
    "DeleteAFileManagerFileErrorBody",
    "DeleteDocumentErrorBody",
    "DeleteSpaceGroupErrorBody",
    "DiscardSuggestionDocumentErrorBody",
    "GetDocumentErrorBody",
    "ImportContentErrorBody",
    "InfoOpenApiDocumentErrorBody",
    "ListFileManagerFilesErrorBody",
    "MergeSuggestionIntoMainDocumentErrorBody",
    "MoveAFileManagerFileErrorBody",
    "OrganizationDisplayRulesErrorBody",
    "OrganizationExportErrorBody",
    "OverwriteAFileManagerFileErrorBody",
    "RequestMagicLinkAccessErrorBody",
    "SearchDocumentErrorBody",
    "SyncOpenApiDocumentErrorBody",
    "UpdateCreateDocumentErrorBody",
    "UploadSingleFileErrorBody",
    "create_space_group_error_mapper",
    "delete_a_file_manager_file_error_mapper",
    "delete_document_error_mapper",
    "delete_space_group_error_mapper",
    "discard_suggestion_document_error_mapper",
    "get_document_error_mapper",
    "import_content_error_mapper",
    "info_open_api_document_error_mapper",
    "list_file_manager_files_error_mapper",
    "merge_suggestion_into_main_document_error_mapper",
    "move_a_file_manager_file_error_mapper",
    "organization_display_rules_error_mapper",
    "organization_export_error_mapper",
    "overwrite_a_file_manager_file_error_mapper",
    "request_magic_link_access_error_mapper",
    "search_document_error_mapper",
    "sync_open_api_document_error_mapper",
    "update_create_document_error_mapper",
    "upload_single_file_error_mapper",
]
